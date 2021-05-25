cd C:\ICT.Tests
npm install
call npm install -D cypress-iframe
call npm run cy:run -- --spec "cypress/integration/Search/search-spec.js