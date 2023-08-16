import fs from 'fs';
import path from 'path';

const staticFile = (req, res) => {
 
    const filePath = path.join(process.cwd(), 'src', 'pages', 'api', 'assets', req.query.index[0]);
 
    if (fs.existsSync(filePath)) {
        const fileStream = fs.createReadStream(filePath);
        res.setHeader('Content-Type', 'image/png');
        fileStream.pipe(res);
    } else {
        res.status(404).end('File not found');
    }
};
export default staticFile