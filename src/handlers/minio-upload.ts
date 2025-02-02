import { Client } from 'minio';
import { randomUUID } from 'node:crypto'

export function uploadToMinio(
  config: {
    endPoint: string;
    port?: number;
    useSSL?: boolean;
    accessKey: string;
    secretKey: string;
  },
	sourceFile : string,
  bucketName: string,
  publicId: string = randomUUID(),
): Promise<string> {
  return new Promise(async (resolve, reject) => {
		try{
			const minioClient = new Client({
				endPoint: config.endPoint,
				port: config.port || 9000,
				useSSL: config.useSSL || false,
				accessKey: config.accessKey,
				secretKey: config.secretKey,
			});
	
			const exists = await minioClient.bucketExists(bucketName)
			if (!exists) {
				await minioClient.makeBucket(bucketName)
			}
	
			await minioClient.fPutObject(bucketName, publicId, sourceFile)
			resolve(publicId);
		} catch (error) {
			reject(error);
		}
  });
}
