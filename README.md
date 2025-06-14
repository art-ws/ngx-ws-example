# ngx-ws-example

Demo [angular](https://angular.dev/) project for [ngx-ws](https://www.npmjs.com/package/ngx-ws)

## 📋 Log & Example

```shell
pnpm i @angular/cli -g
cd ~/ngx-ws-example
ng new --no-create-application --zoneless --skip-git --minimal --skip-install --package-manager=pnpm 
ng generate app app1  --style=scss --zoneless --minimal --skip-install --skip-tests
ng generate app app2  --style=scss --zoneless --minimal --skip-install --skip-tests --ssr
ng generate library lib1 --skip-install
ng generate library lib2 --skip-install
pnpm i
ng build app1 && ng build app2 && ng build lib1 && ng build lib2

# Usage
pnpm i ngx-ws -g # Install globally
ngx-ws --build # create angular-{workspace,project}.yaml files ...
pnpm --package=ngx-ws@latest dlx ngx-ws --build # ... or using dlx
ngx-ws -v # create angular.json
pnpm --package=ngx-ws@latest dlx ngx-ws -v # create angular.json using dlx
```
