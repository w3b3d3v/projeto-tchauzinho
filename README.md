# Portal mensagens

## Descrição
O projeto "Portal mensagens" é um sistema de contrato inteligente (smart contract) que permite aos usuários enviarem mensagens virtualmente (wave) e interagirem de forma descentralizada atraves do blockchain.

## Funcionalidades Principais
- **Wave**: Os usuários podem enviar saudações (waves) para o contrato inteligente.
- **Registro de Waves**: O contrato inteligente registra as saudações e mantém um histórico.
- **Pagamento**: Um pequeno valor em Ether é enviado junto com a saudação.

## Pré-requisitos (recomendados)
- Node.js (versão v18+)
- NPM (versão v8+)
- Hardhat 
- Ethereum Provider (por exemplo, [Alchemy](https://www.alchemy.com/))
- Metamask (para interagir com o contrato na interface web)

## Configuração
1. Clone o repositório: `https://github.com/ElisonMartins/portal-mensagens.git`
2. Instale as dependências: `npm install`
3. Crie um arquivo `.env` dentro da pastas ContractSolidity com as seguintes variáveis:

STAGING_ALCHEMY_KEY=STAGING_ALCHEMY_KEY  
PRIVATE_KEY=YOUR_PRIVATE_KEY

Certifique-se de substituir `STAGING_ALCHEMY_KEY` e `YOUR_PRIVATE_KEY` pelos valores apropriados.

## Uso
1. Compile os contratos: `npx hardhat compile`
2. Execute os testes: `npx hardhat test`
3. Faça o deploy do contrato: `npx hardhat run scripts/deploy.ts`
4. Interaja com o contrato na interface web.

## Contribuição
Contribuições são bem-vindas! Antes de fazer alterações significativas, abra um problema para discutir as alterações propostas.  

## Licença
Este projeto está licenciado sob a [MIT License](LICENSE).  

## Duvidas
Para mais duvidas visite o curso da [W3D](https://build.w3d.community/courses/Solidity_And_Smart_Contracts)


