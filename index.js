const puppeteer = require('puppeteer');

// - DATA DE ANTERIOR A DATA ATUAL 
var hoje = new Date();

var ontem = new Date(hoje.getTime());
ontem.setDate(hoje.getDate() - 1
);

var dd = ontem.getDate();
var mm = ontem.getMonth()+1; 
var yyyy = ontem.getFullYear();

if(dd<10) 
{
dd='0'+dd;
}

if(mm<10) 
{
mm='0'+mm;
} 

var data_ok = yyyy + '.' + mm + '.' + dd;

var dataAnterior = data_ok

console.log(dataAnterior);
// - FIM 

var valorTeste = dataAnterior;

(async () => {
    const browser = await puppeteer.launch({  headless: false, });

    const page = await browser.newPage();
    await page.goto('http://127.0.0.1/tms/');

    // - COLETANDO DADOS DOS TEARES
    await page.click('[href="loom/getdata.cgi"]');
    await page.click('[type="CHECKBOX"]', {clickCount:1});
    await page.click('[type="SUBMIT"]');
    await page.waitForNavigation();
    await page.click('[href="../"]')
    // - FIM 

    await page.goto('http://127.0.0.1/tms/');

    // - GERANDO RELATORIO DE TURNOS
    await page.click ('[href="shift/select_s.cgi?mode=shiftreport"]');
    await page.click ('[value="date"]', {clickCount:1});


    await page.evaluate((valorTeste ) => {
    document.querySelector("select").value = valorTeste;
    },valorTeste).catch(error => { console.log(error) });


    await page.click('[type="CHECKBOX"]', {clickCount:1});
    await page.click('[type="SUBMIT"]');
    await page.waitFor(2000);
    // - FIM 

    await page.goto('http://127.0.0.1/tms/');

    // - GERANDO RELATORIO ARTIGO
    await page.click ('[href="shift/select_s.cgi?mode=stylereport"]');
    await page.click ('[value="date"]', {clickCount:1});


    await page.evaluate((valorTeste ) => {
    document.querySelector("select").value = valorTeste;
    },valorTeste).catch(error => { console.log(error) });


    await page.click('[type="CHECKBOX"]', {clickCount:1});
    await page.click('[type="SUBMIT"]');
    await page.waitFor(2000);
    // - FIM

    await page.goto('http://127.0.0.1/tms/');

    // - GERANDO RELATORIO HISTORICO
    await page.click ('[href="shift/select_s.cgi?mode=statushistory"]');
    await page.click ('[value="date"]', {clickCount:1});


    await page.evaluate((valorTeste ) => {
    document.querySelector("select").value = valorTeste;
    },valorTeste).catch(error => { console.log(error) });


    await page.click('[type="CHECKBOX"]', {clickCount:1});
    await page.click('[type="SUBMIT"]');
    await page.waitFor(2000);
    // - FIM 

    await page.goto('http://127.0.0.1/tms/');

    // - GERANDO RELATORIO DE PRODUÇÃO
    await page.click ('[href="shift/select_s.cgi?mode=production"]');
    await page.click ('[value="date"]', {clickCount:1});


    await page.evaluate((valorTeste ) => {
    document.querySelector("select").value = valorTeste;
    },valorTeste).catch(error => { console.log(error) });


    await page.click('[type="CHECKBOX"]', {clickCount:1});
    await page.click('[type="SUBMIT"]');
    await page.waitFor(2000);
    // - FIM 

    await page.goto('http://127.0.0.1/tms/');

    // - GERANDO RELATORIO DE EFICIENCIA
    await page.click ('[href="shift/select_s.cgi?mode=efficiency"]');
    await page.click ('[value="date"]', {clickCount:1});


    await page.evaluate((valorTeste ) => {
    document.querySelector("select").value = valorTeste;
    },valorTeste).catch(error => { console.log(error) });


    await page.click('[type="CHECKBOX"]', {clickCount:1});
    await page.click('[type="SUBMIT"]');
    await page.waitFor(2000);
    // - FIM 

    await page.goto('http://127.0.0.1/tms/');

    // - GERANDO RELATORIO ANALISE DE PARADAS
    await page.click ('[href="shift/select_s.cgi?mode=stopanalysis"]');
    await page.click ('[value="date"]', {clickCount:1});


    await page.evaluate((valorTeste ) => {
    document.querySelector("select").value = valorTeste;
    },valorTeste).catch(error => { console.log(error) });


    await page.click('[type="CHECKBOX"]', {clickCount:1});
    await page.click('[type="SUBMIT"]');
    await page.waitFor(2000);
    // - FIM 

    await page.goto('http://127.0.0.1/tms/');

    // - GERANDO RELATORIO FIO E PREVISAO
    await page.click ('[href="shift/select_s.cgi?mode=forecast"]');
    await page.click('[type="CHECKBOX"]', {clickCount:1});
    await page.click('[type="SUBMIT"]');
    await page.waitFor(2000);
    // - FIM 

    await page.goto('http://127.0.0.1/tms/');

    // - GERANDO RELATORIO HISTORICO DE PARADAS
    await page.click ('[href="shift/stophistory.cgi"]');

    await page.evaluate((valorTeste ) => {
    document.querySelector("select").value = valorTeste;
    },valorTeste).catch(error => { console.log(error) });

    await page.click('[type="SUBMIT"]');
    await page.waitFor(2000);
    // - FIM 

    
    await browser.close();
})();
