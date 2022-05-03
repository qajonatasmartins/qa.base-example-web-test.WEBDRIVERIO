import request from 'superagent'
import { baseUrl } from '../../data/global/baseUrl.data'
import { path } from '../../data/global/path.data'

export async function postNomeMetodo() {
    let response
    try {
        await request.post(`${baseUrl.apiPostman}${path.apiPostman.post.nomeEndpoint}`)
            .disableTLSCerts()
            .set('cache-control', 'no-cache')
            .set('Content-Type', 'application/json')
            .set('postman-token', 'fcd070c1-ec0d-bb68-be33-fcf49f1427f8')
            .send({
                id: "7875be4b-917d-4aff-8cc4-5606c36bf418",
                requests: {
                    id: "4d9134be-e8bf-4693-9cd7-1c0fc66ae739",
                    name: "A simple POST request"
                }
            })
            .then((res) => {
                response = res.body.nomeDoAtributoDoResponseQueDesejaPegar;
            })
    } catch (error) {
        console.log(`Error request postNomeMetodo()\n: ${error}`)
    }
    return response
}

/** Curl de exemplo - Montado. Obs.: O request é de exemplo montado a mão, então não tente rodar no postman.
 * 
 curl -X POST \
  'https://postman-echo.com/transform/collection?from=1&to=2' \
  -H 'cache-control: no-cache' \
  -H 'content-type: application/json' \
  -H 'postman-token: fcd070c1-ec0d-bb68-be33-fcf49f1427f8' \
  -d '{
  "id": "7875be4b-917d-4aff-8cc4-5606c36bf418",
  "requests": {
      "id": "4d9134be-e8bf-4693-9cd7-1c0fc66ae739",
      "name": "A simple GET request"
    }
}'
 */