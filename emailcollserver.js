const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const { STATUS_CODES } = require('http');
const app = express();
const cors = require('cors');
const ExcelJS = require('exceljs');

app.use(bodyParser.json());
app.use(cors());

app.post('/emailcoll', async (req, res) => {
    const { email } = req.body;
    const filePath = './emailcoll.xlsx';

    let workbook;
    let worksheet;

        workbook = new ExcelJS.Workbook();
        await workbook.xlsx.readFile(filePath);
        worksheet = workbook.getWorksheet('Sheet 1');

    worksheet.columns = { header: 'Email', key: 'email' }
  
  worksheet.addRow({ email});

   
    await workbook.xlsx.writeFile(filePath);
    res.send(STATUS_CODES)
  })
  app.listen(3004)