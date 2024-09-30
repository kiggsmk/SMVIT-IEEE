const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const { STATUS_CODES } = require('http');
const app = express();
const PORT = process.env.PORT || 3000;
const cors = require('cors');
const ExcelJS = require('exceljs');

app.use(bodyParser.json());
app.use(cors());
app.post('/regmem', async (req, res) => {
    const { name, email, phone } = req.body;
    const filePath = './regdata.xlsx';

    let workbook;
    let worksheet;

        workbook = new ExcelJS.Workbook();
        await workbook.xlsx.readFile(filePath);
        worksheet = workbook.getWorksheet('Sheet 1');

    worksheet.columns = [
      { header: 'Name', key: 'name' },
      { header: 'Email', key: 'email' },
      { header: 'Phone', key: 'phone' }
  ];
  worksheet.addRow({ name, email, phone });

   
    await workbook.xlsx.writeFile(filePath);
    console.log(name);
    console.log(email);
    console.log(phone)
    
    res.send(STATUS_CODES)
    
  });


  app.post('/emailcoll', async (req, res) => {
    const { email } = req.body;
    const filePath = './emailcoll.xlsx';

    let workbook;
    let worksheet;

        workbook = new ExcelJS.Workbook();
        await workbook.xlsx.readFile(filePath);
        worksheet = workbook.getWorksheet('Sheet 1');

    worksheet.columns = { header: 'Email', key: 'email' }
  
  worksheet.addRow({email});

   
    await workbook.xlsx.writeFile(filePath);
    res.send(STATUS_CODES)
  })
  app.listen(3001)