import PQueue from 'p-queue'
import axios, { AxiosPromise, AxiosRequestConfig } from 'axios'
import { AuthenticationStore } from '@state/AuthState'
import { Logger } from '@utils/Logger'

type requestMethod = 'get' | 'post' | 'put' | 'patch' | 'delete'
type requestBody = Record<any, any>
type requestConfig = {
  headerContentType?: string
  unAuthenticated?: boolean
  requestPriority?: number
}

export default class RequestManager {
  private static baseUrl: string | undefined =
    process.env.NODE_ENV === 'development' ? process.env.NEXT_PUBLIC_BASE_URL_LOCAL : process.env.NEXT_PUBLIC_BASE_URL_PROD
  static queue = new PQueue({ concurrency: 15 })

  public static async makeRequest<RT>(url: string, method: requestMethod, body?: requestBody, config?: requestConfig): Promise<RT> {
    //get auth token from state
    const token = AuthenticationStore.getState().authToken

    //build axios config
    const request: AxiosRequestConfig = {
      url: `${RequestManager.baseUrl}${url}`,
      withCredentials: true,
      headers: {
        'Content-Type': RequestManager.getRequestHeaderContentType(config),
        Authorization: `Bearer ${token}`
      },
      method,
      data: body ? body : undefined
    }

    //if request does not need token
    //send immediately
    if (config && config.unAuthenticated) {
      return await this.sendRequest<RT>(request, config)
    }

    //if request needs to be authenticated
    //and there is no token - delay for 3secs & retry
    if (!token) {
      await this.sleep(3000)
    } else {
      console.log('above send', token)
      return await this.sendRequest<RT>(request, config)
    }

    return await this.makeRequest<RT>(url, method, body, config)
  }

  private static getRequestHeaderContentType(config?: requestConfig) {
    if (!config || !config.headerContentType) return 'application/json'
    return config.headerContentType
  }

  private static getRequestPriority(config?: requestConfig) {
    if (!config || !config.requestPriority) return 0
    return config.requestPriority
  }

  private static async addRequestToQueue(request: AxiosPromise, priority: number) {
    return await RequestManager.queue.add(() => request, { priority: priority })
  }

  private static async sendRequest<RT>(request: AxiosRequestConfig, config?: requestConfig): Promise<RT> {
    Logger(`res: ${request.url} >>`, 'sending...')
    const response = await this.addRequestToQueue(axios(request), RequestManager.getRequestPriority(config))
    Logger(`res: ${request.url} >>`, response.status)
    return response.data
  }

  private static sleep(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms))
  }
}
