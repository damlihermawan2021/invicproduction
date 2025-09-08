const Minio = require('minio');

const minioClient = new Minio.Client({
  endPoint: '89.116.157.116',
  port: 9008,
  useSSL: false,
  accessKey: 'admin',
  secretKey: 'admin123',
});

export const uploadImage = async (filePath, folderName, objectName) => {
  try {
    const response = await minioClient.fPutObject('invic-production', `singlekatolik/${folderName}/${objectName}`, filePath);
      return `http://89.116.157.116:9008/browser/invic-production/singlekatolik/${folderName}/${objectName}`;
  } catch (err) {
    console.error('Upload failed', err);
    throw new Error('Upload failed');
  }
};

export const getPresignedUrl = async (folderName, objectName) => {
  try {
    // Menghasilkan presigned URL untuk file yang berlaku selama 1 jam (3600 detik)
    const url = await minioClient.presignedUrl(
      'GET',
      'invic-production',  // Nama bucket
      `singlekatolik/${folderName}/${objectName}`,
      3600  // URL berlaku selama 1 jam
    );
    return url;  // Mengembalikan URL untuk mengakses file
  } catch (err) {
    console.error('Error generating presigned URL', err);
    throw new Error('Error generating presigned URL');
  }
};
