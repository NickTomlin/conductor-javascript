/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ConductorApplication } from '../models/ConductorApplication';
import type { CreateOrUpdateApplicationRequest } from '../models/CreateOrUpdateApplicationRequest';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class ApplicationResourceService {

  constructor(public readonly httpRequest: BaseHttpRequest) {}

  /**
   * Get an application by id
   * @param id
   * @returns any OK
   * @throws ApiError
   */
  public getApplication(
    id: string,
  ): CancelablePromise<any> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/applications/{id}',
      path: {
        'id': id,
      },
    });
  }

  /**
   * Update an application
   * @param id
   * @param requestBody
   * @returns any OK
   * @throws ApiError
   */
  public updateApplication(
    id: string,
    requestBody: CreateOrUpdateApplicationRequest,
  ): CancelablePromise<any> {
    return this.httpRequest.request({
      method: 'PUT',
      url: '/applications/{id}',
      path: {
        'id': id,
      },
      body: requestBody,
      mediaType: 'application/json',
    });
  }

  /**
   * Delete an application
   * @param id
   * @returns any OK
   * @throws ApiError
   */
  public deleteApplication(
    id: string,
  ): CancelablePromise<any> {
    return this.httpRequest.request({
      method: 'DELETE',
      url: '/applications/{id}',
      path: {
        'id': id,
      },
    });
  }

  /**
   * Get application's access keys
   * @param id
   * @returns any OK
   * @throws ApiError
   */
  public getAccessKeys(
    id: string,
  ): CancelablePromise<any> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/applications/{id}/accessKeys',
      path: {
        'id': id,
      },
    });
  }

  /**
   * Create an access key for an application
   * @param id
   * @returns any OK
   * @throws ApiError
   */
  public createAccessKey(
    id: string,
  ): CancelablePromise<any> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/applications/{id}/accessKeys',
      path: {
        'id': id,
      },
    });
  }

  /**
   * @param applicationId
   * @param role
   * @returns any OK
   * @throws ApiError
   */
  public addRoleToApplicationUser(
    applicationId: string,
    role: string,
  ): CancelablePromise<any> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/applications/{applicationId}/roles/{role}',
      path: {
        'applicationId': applicationId,
        'role': role,
      },
    });
  }

  /**
   * @param applicationId
   * @param role
   * @returns any OK
   * @throws ApiError
   */
  public removeRoleFromApplicationUser(
    applicationId: string,
    role: string,
  ): CancelablePromise<any> {
    return this.httpRequest.request({
      method: 'DELETE',
      url: '/applications/{applicationId}/roles/{role}',
      path: {
        'applicationId': applicationId,
        'role': role,
      },
    });
  }

  /**
   * Toggle the status of an access key
   * @param applicationId
   * @param keyId
   * @returns any OK
   * @throws ApiError
   */
  public toggleAccessKeyStatus(
    applicationId: string,
    keyId: string,
  ): CancelablePromise<any> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/applications/{applicationId}/accessKeys/{keyId}/status',
      path: {
        'applicationId': applicationId,
        'keyId': keyId,
      },
    });
  }

  /**
   * Get all applications
   * @returns ConductorApplication OK
   * @throws ApiError
   */
  public listApplications(): CancelablePromise<Array<ConductorApplication>> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/applications',
    });
  }

  /**
   * Create an application
   * @param requestBody
   * @returns any OK
   * @throws ApiError
   */
  public createApplication(
    requestBody: CreateOrUpdateApplicationRequest,
  ): CancelablePromise<any> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/applications',
      body: requestBody,
      mediaType: 'application/json',
    });
  }

  /**
   * Delete an access key
   * @param applicationId
   * @param keyId
   * @returns any OK
   * @throws ApiError
   */
  public deleteAccessKey(
    applicationId: string,
    keyId: string,
  ): CancelablePromise<any> {
    return this.httpRequest.request({
      method: 'DELETE',
      url: '/applications/{applicationId}/accessKeys/{keyId}',
      path: {
        'applicationId': applicationId,
        'keyId': keyId,
      },
    });
  }

}
