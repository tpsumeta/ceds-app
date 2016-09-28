## Usage
```
docker run -it --rm digitallyseamless/nodejs-bower-grunt
```
### Run node
```
docker run -it --rm digitallyseamless/nodejs-bower-grunt node
```

### Run npm
```
docker run -it --rm digitallyseamless/nodejs-bower-grunt npm
```
### Run bower
```
docker run -it --rm digitallyseamless/nodejs-bower-grunt bower
```
### Run grunt
```
docker run -it --rm digitallyseamless/nodejs-bower-grunt grunt
```


### RUN NPM
```
docker run --name ceds-ionic -it --rm -v /home/docker/developer/ceds-ionic:/data digitallyseamless/nodejs-bower-grunt npm install
```

### RUN IONIC
```
docker run -it -v /home/docker/developer/ceds-ionic:/tmp  beevelop/ionic bash
```

#### OR IONIC
```
docker run -it beevelop/cordova bash
```
