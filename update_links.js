const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'src/lib/audimaxCompleteHtml.ts');
let content = fs.readFileSync(filePath, 'utf8');

// Links fornecidos
const links = {
  '12': 'https://ev.braip.com/checkout/pla89kmr/cherkxlx',
  '5': 'https://ev.braip.com/checkout/pla98r90/cherkxlx',
  '3': 'https://ev.braip.com/checkout/plamn90y/cherkxlx',
  '1': 'https://ev.braip.com/checkout/plapzn0m/cherkxlx'
};

// Vamos procurar todas as tags de botão de compra (btn-buy) no arquivo
// E tentar associar ao número de frascos que aparece próximo a ele.

const btnRegex = /<a\s+href="([^"]*)"\s+class="[^"]*btn-buy[^"]*"[^>]*>/g;

let match;
let newContent = content;

// Vamos dividir o conteúdo em seções de pacotes (assumindo que a classe 'pkg' envolve cada pacote)
const pkgs = content.split('class="pkg"');
if (pkgs.length > 1) {
  for (let i = 1; i < pkgs.length; i++) {
    let pkgHtml = pkgs[i];
    
    // Determinar qual é o pacote lendo o número de frascos no HTML do pacote
    let frascoMatch = pkgHtml.match(/(\d+)\s*Frasco/i) || pkgHtml.match(/(\d+)\s*Pote/i) || pkgHtml.match(/Compre\s*(\d+)/i);
    let frascos = frascoMatch ? frascoMatch[1] : null;
    
    if (frascos && links[frascos]) {
      // Substituir o href no btn-buy dentro deste pacote
      let updatedPkgHtml = pkgHtml.replace(/<a(\s+[^>]*)href="([^"]*)"([^>]*class="[^"]*btn-buy[^"]*"[^>]*)>/i, `<a$1href="${links[frascos]}"$3>`);
      
      // Caso a ordem das classes/atributos seja diferente
      if (updatedPkgHtml === pkgHtml) {
          updatedPkgHtml = pkgHtml.replace(/<a(\s+[^>]*class="[^"]*btn-buy[^"]*"[^>]*)href="([^"]*)"([^>]*)>/i, `<a$1href="${links[frascos]}"$3>`);
      }
      
      newContent = newContent.replace(pkgHtml, updatedPkgHtml);
      console.log(`\u2705 Link do pacote de ${frascos} frascos atualizado com sucesso!`);
    } else {
      console.log(`\u26A0\ufe0f Não foi possível identificar a quantidade de frascos num dos pacotes ou o link não foi fornecido.`);
    }
  }
  
  fs.writeFileSync(filePath, newContent, 'utf8');
  console.log('\n\ud83c\udf89 Todos os links de checkout foram inseridos no arquivo src/lib/audimaxCompleteHtml.ts!');
} else {
  console.log('\u274c Não foi possível encontrar a estrutura dos pacotes. Por favor, insira manualmente procurando por btn-buy no arquivo.');
}
