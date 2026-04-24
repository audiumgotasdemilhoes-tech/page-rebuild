import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const filePath = path.join(__dirname, 'src', 'lib', 'audimaxCompleteHtml.ts');
let content = fs.readFileSync(filePath, 'utf8');

const links = {
  '12': 'https://ev.braip.com/checkout/pla89kmr/cherkxlx',
  '5': 'https://ev.braip.com/checkout/pla98r90/cherkxlx',
  '3': 'https://ev.braip.com/checkout/plamn90y/cherkxlx',
  '1': 'https://ev.braip.com/checkout/plapzn0m/cherkxlx'
};

let parts = content.split('<div class=\\"pkg');

if (parts.length > 1) {
  for (let i = 1; i < parts.length; i++) {
    let part = parts[i];
    
    let match12 = part.toLowerCase().includes('12');
    let match5 = part.toLowerCase().includes('5');
    let match3 = part.toLowerCase().includes('3');
    let match1 = part.toLowerCase().includes('1');
    
    let link = '';
    if (match12) link = links['12'];
    else if (match5) link = links['5'];
    else if (match3) link = links['3'];
    else if (match1) link = links['1'];
    
    if (link) {
      let btnIndex = part.indexOf('class=\\"btn-buy\\"');
      if (btnIndex !== -1) {
          let tagStart = part.lastIndexOf('<', btnIndex);
          let tagEnd = part.indexOf('>', btnIndex);
          
          if (tagStart !== -1 && tagEnd !== -1) {
              let tagStr = part.substring(tagStart, tagEnd + 1);
              
              // Remove existing href para evitar duplicidade
              tagStr = tagStr.replace(/href=\\"[^\\"]*\\"/, '');
              
              // Transforma <button> em <a> caso estivesse assim
              tagStr = tagStr.replace(/^<button/, '<a');
              
              // Adiciona o href
              tagStr = tagStr.replace('class=\\"btn-buy\\"', `href=\\"${link}\\" class=\\"btn-buy\\"`);
              
              part = part.substring(0, tagStart) + tagStr + part.substring(tagEnd + 1);
              
              // Fecha a tag corretamente caso fosse button
              part = part.replace('</button>', '</a>');
          }
      }
      parts[i] = part;
    }
  }
  content = parts.join('<div class=\\"pkg');
  fs.writeFileSync(filePath, content, 'utf8');
  console.log('\n✅ Links inseridos diretamente no HTML com sucesso!\n');
} else {
  console.log('\n❌ Não foi possível encontrar os pacotes no HTML.\n');
}
