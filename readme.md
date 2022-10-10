**Get All Pokemon**
----
  <_Get Every pokemon in the database_>

* **URL**

  <_/allPokemon_>

* **Method:**
  
  <_The request type_>

  `GET`
  
  
  <_Success code_>

  * **Code:** 200 <br />
 
* **Error Response:**

  * **Code:** 401 UNAUTHORIZED <br />
    **Content:** `{ error : "Log in" }`

  OR

  * **Code:** 404 NOT FOUND <br />
    **Content:** `{ error : "Not found" }`


 **Get A Pokemon**
----
  <_Get a single pokemon_>

* **URL**

  <_/pokemon/:id_>

* **Method:**
  
  <_The request type_>

  `GET`
  
  
  <_Success code_>

  * **Code:** 200 <br />
 
* **Error Response:**

  * **Code:** 401 UNAUTHORIZED <br />
    **Content:** `{ error : "Log in" }`

  OR

  * **Code:** 404 NOT FOUND <br />
    **Content:** `{ error : "Not found" }`

**Get Some Pokemon**
----
  <_Get all pokemon in a range_>

* **URL**

  <_/pokemons_>

* **Method:**
  
  <_The request type_>

  `GET`
  
  
  <_Success code_>

  * **Code:** 200 <br />
 
* **Error Response:**

  * **Code:** 401 UNAUTHORIZED <br />
    **Content:** `{ error : "Log in" }`

  OR

  * **Code:** 404 NOT FOUND <br />
    **Content:** `{ error : "Not found" }`

**Get A pokemon image URL**
----
  <_Get Every pokemon in the database_>

* **URL**

  <_/pokemonImage/:id_>

* **Method:**
  
  <_The request type_>

  `GET`
  
  
  <_Success code_>

  * **Code:** 200 <br />
 
* **Error Response:**

  * **Code:** 401 UNAUTHORIZED <br />
    **Content:** `{ error : "Log in" }`

  OR

  * **Code:** 404 NOT FOUND <br />
    **Content:** `{ error : "Not found" }`

**Create a pokemon**
----
  <_Create a single pokemon following the poke-schema_>

* **URL**

  <_/pokemon_>

* **Method:**
  
  <_The request type_>

  `POST`
  
  
  <_Success code_>

  * **Code:** 200 <br />
 
* **Error Response:**

  * **Code:** 401 UNAUTHORIZED <br />
    **Content:** `{ error : "Log in" }`

  OR

  * **Code:** 404 NOT FOUND <br />
    **Content:** `{ error : "Not found" }`

**Patch a Pokemon**
----
  <_Update a single pokemon_>

* **URL**

  <_/pokemon/:id_>

* **Method:**
  
  <_The request type_>

  `PATCH`
  
  
  <_Success code_>

  * **Code:** 200 <br />
 
* **Error Response:**

  * **Code:** 401 UNAUTHORIZED <br />
    **Content:** `{ error : "Log in" }`

  OR

  * **Code:** 404 NOT FOUND <br />
    **Content:** `{ error : "Not found" }`

**Upsert a Pokemon**
----
  <_Update or insert a pokemon with a single call_>

* **URL**

  <_/pokemon/:id_>

* **Method:**
  
  <_The request type_>

  `PUT`
  
  
  <_Success code_>

  * **Code:** 200 <br />
 
* **Error Response:**

  * **Code:** 401 UNAUTHORIZED <br />
    **Content:** `{ error : "Log in" }`

  OR

  * **Code:** 404 NOT FOUND <br />
    **Content:** `{ error : "Not found" }`

**Delete a Pokemon**
----
  <_Delete a pokemon from the database_>

* **URL**

  <_/pokemon/:id_>

* **Method:**
  
  <_The request type_>

  `DELETE`
  
  
  <_Success code_>

  * **Code:** 200 <br />
 
* **Error Response:**

  * **Code:** 401 UNAUTHORIZED <br />
    **Content:** `{ error : "Log in" }`

  OR

  * **Code:** 404 NOT FOUND <br />
    **Content:** `{ error : "Not found" }`
