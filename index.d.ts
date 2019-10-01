import {Request, RequestHandler, Response} from 'express';
import {ZlibOptions} from 'zlib';
import {BrotliEncodeParams} from 'iltorb';

type FilterFunction = (req: Request, res: Response) => boolean;

interface ShrinkRayOptions {
  brotli?: Partial<BrotliEncodeParams>;
  cacheSize?: number | string | false;
  filter?: FilterFunction;
  threshold?: number | string | false;
  zlib?: Partial<ZlibOptions>;
  /** Whether to use node-zopfli-es (true) or zlib (false) for gzip compression. Defaults to true. */
  useZopfliForGzip?: boolean;

  cache?(req: Request, res: Response): boolean;
}


interface CreateMiddleware {
  (options?: ShrinkRayOptions): RequestHandler;

  filter: FilterFunction;
}

declare const createMiddleware: CreateMiddleware;

export = createMiddleware;
