# Initial Setup (start afresh cheatsheet)
```bash
# angular-cli
#ng new [PROJECT NAME]
#cd [PROJECT NAME]
#ng serve -o
# bootstrap Sticky footer with fixed navbar 
# https://getbootstrap.com/docs/5.1/examples/sticky-footer-navbar/
npm i bootstrap@5.2.1 #https://getbootstrap.com/docs/versions/
# https://www.npmjs.com/package/@ng-bootstrap/ng-bootstrap
#npm i @ng-bootstrap/ng-bootstrap
```

# If you decide to Update + Check Outdated Dependencies
```bash
npm outdated
```
- Need to deal with this: 13 vulnerabilities (4 moderate, 9 high))

# Build Instructions 🌹
```bash
git checkout -b master
git push --delete origin gh-pages
git branch -d gh-pages
git checkout -b gh-pages
git push origin gh-pages
npm audit fix
npm prune 
#npm install -g angular-cli-ghpages
npm install
ng build --configuration production --aot --base-href "https://oliverwreath.github.io/Angular-RESTful/"
ngh --dir=dist/angular-restful
```

# Legacy slow step-by-step updates @angular/cli latest v14, supported v12
- https://update.angular.io/?v=10.2-11.0
```bash
npm audit fix
npm prune 
npm install
#npm install -g angular-cli-ghpages
npm audit fix
npm prune 
npm install
#ng update @angular/cli
#ng update @angular/core
#npm update
```

# Example Json data from provided api 
```bash
# https://reqres.in/api/users
```

# TODO 
- Free Online TODO list
