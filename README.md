
# FILE CONVERTER WEB SERVICE

API/BackEnd from a website that can convert txt to JSON or XML, also you can convert XML OR JSON to txt.


## Installation

Install ARI-WS with npm

download this project with this command:
```bash
  git clone https://github.com/Sebs14/Ari-webService.git
  cd Ari-webService
```

first command that you need to run on the project it is:
```bash
  npm i 
  or
  npm install
```
this command will install all dependencies on this project

As the second step it is to run the command
```bash
  npm run start:dev
```

this will run the project on localHost:3000 by default so you need to run it before the front-end

## API Reference

#### POST

on this API you can only make POST request

```http
  POST /fileConvertor/txtToXml
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `secret` | `string` | **Required**. |
| `separator` | `string` | **Required**. |
| `file` | `file` | **Required**. |

```http
  POST /fileConvertor/txtToJson
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `secret` | `string` | **Required**. |
| `separator` | `string` | **Required**. |
| `file` | `file` | **Required**. |

```http
  POST /fileConvertor/jsonToTxt
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `secret` | `string` | **Required**. |
| `separator` | `string` | **Required**. |
| `file` | `file` | **Required**. |

```http
  POST /fileConvertor/xmlToTxt
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `secret` | `string` | **Required**. |
| `separator` | `string` | **Required**. |
| `file` | `file` | **Required**. |
