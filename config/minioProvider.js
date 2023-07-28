import * as Minio from 'minio'

export const minioClient = new Minio.Client({
        endPoint: process.env.AWS_ENDPOINT,
        port: 443,
        useSSL: true,
        accessKey: process.env.AWS_ACCESS_KEY,
        secretKey: process.env.AWS_SECRET_ACCESS_KEY
    });  