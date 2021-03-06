type PushwooshApiResponce = {
  status_code: number,
  status_message: string,
  response?: any
};

type TPWPermission = 'denied' | 'granted' | 'default';

interface IPWDriverAPIParams {
  hwid: string;
  pushToken: string;
  publicKey?: string;
  authToken?: string;
}

interface TPWAPIParams extends IPWDriverAPIParams {
  applicationCode: string;
  pushwooshApiUrl?: string;
  deviceType: number;
  deviceModel: string;
  language: string;
  userId?: string;
}

interface TPWLastOpenMessage {
  messageHash?: string,
  expiry?: number,
  url?: string
}

interface PushManager {
  permissionState(options: PushSubscriptionOptions): Promise<TPWPermission>
}

interface PushSubscription {
  unsubscribe(): Promise<boolean>;
}

interface IPWDriver {
  initWorker?(): Promise<any>;
  getPermission(): Promise<TPWPermission>;
  isSubscribed(): Promise<boolean>;
  askSubscribe(eventEmitter?: any): Promise<any>;
  unsubscribe(): Promise<any>;
  getAPIParams(): Promise<IPWDriverAPIParams>;
  onApiReady?(api: any): void;
}

interface ServiceWorkerRegistration {
  showNotification(a: any, b: any): Promise<any>;
}

interface ITooltipText {
  successSubscribe?: string;
  needSubscribe?: string;
  blockSubscribe?: string;
  alreadySubscribed?: string;
}

interface ISubscribeWidget {
  enable: boolean;
  position?: string,
  bgColor?: string,
  bellColor?: string,
  shadow?: string,
  size?: string,
  indent?: string,
  zIndex?: string,
  tooltipText?: ITooltipText
}

interface IInitParams {
  applicationCode: string;
  serviceWorkerUrl?: string | null;
  safariWebsitePushID?: string;
  autoSubscribe?: boolean;
  pushwooshUrl?: string;
  pushwooshApiUrl?: string;
  logLevel?: string;
  userId?: string;
  scope?: string;
  tags?: {[key: string]: any};
  driversSettings?: {
    worker?: {
      serviceWorkerUrl?: string;
      applicationServerPublicKey?: string;
    }
  };
  subscribeWidget?: ISubscribeWidget;
}

interface IInitParamsWithDefaults extends IInitParams {
  autoSubscribe: boolean;
  pushwooshUrl: string;
  deviceType: number;
  serviceWorkerUrl: string | null;
  tags: {
    Language: string,
    'Device Model': string,
    [key: string]: any
  };
  driversSettings: {
    worker: {
      serviceWorkerUrl: string;
      applicationServerPublicKey?: string;
    }
  };
  subscribeWidget: ISubscribeWidget;
}

type TPWCanWaitCallback = (f: any) => Promise<any> | any;

interface IWorkerPushwooshGlobal {
  push(listener: ['onPush', TPWCanWaitCallback]): void;
  getListeners(eventName: string): TPWCanWaitCallback[];
  api: any;
  initApi: any;
}

interface Window {
  Pushwoosh: IWorkerPushwooshGlobal;
}

interface SubscribeMethodParams {
  cancelApiReInit?: boolean;
}

interface IPWBroadcastClientsParams {
  type: string;
  payload: any;
}

type TMessageInfo = {
  title: string;
  body: string;
  icon: string;
  openUrl: string;
  messageHash: string;
  customData?: any;
  duration?: any;
  buttons?: any;
  image?: string;
};

interface IEevetTargetWithResult extends EventTarget {
  result: IDBDatabase;
}

type TWriteType = 'error' | 'apirequest' | 'info';

interface ILogger {
  setLevel(level: string): void;
  error(...args: any[]): void;
  info(...args: any[]): void;
  debug(...args: any[]): void;
  write(type: TWriteType, message: any, additional?: any): Promise<void>;
  isManualLevel(): boolean;
  [key: string]: any;
}

type ListenerFn = (...args: Array<any>) => void | Promise<any>;

type TWorkerDriverParams = {
  eventEmitter?: any,
  scope?: string,
  applicationCode: string,
  serviceWorkerUrl: string | null,
  serviceWorkerUrlDeprecated?: string,
  applicationServerPublicKey?: string,
};

type TWorkerSafariDriverParams = {
  eventEmitter?: any,
  applicationCode: string,
  webSitePushID: string,
  pushwooshUrl: string,
  pushwooshApiUrl?: string
};

type NotificationButton = {
  title: string,
  action: string,
  url: string
};

type TServiceWorkerClientExtended = ServiceWorkerClient & {
  focus: () => void
}

type TDoPushwooshMethod = (type: string, params: any) => Promise<any>;

declare const __VERSION__: string;
declare const __API_URL__: string;
declare const caches: Cache;
