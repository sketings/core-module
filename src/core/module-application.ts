import { ModulesManager } from './modules-manager';

/**
 * Represents an application using modules
 */
class ApplicationStatic {
  //Modules Manager of the application
  private _modulesManager: ModulesManager;

  //Will be the global state of the app
  // TODO regarder redis pour gérer le state temporaire
  // @link https://medium.com/edonec/make-your-nodejs-server-faster-by-caching-responses-with-redis-typescript-40903a0d3f09
  private _appState: any = {};

  /**
   * Constructor
   * @param modulesNames Names of the modules to load
   */
  constructor() {
    this._modulesManager = new ModulesManager();
  }

  async create() {}
}

export const ApplicationFactory = new ApplicationStatic();
