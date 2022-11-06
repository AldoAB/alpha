{
  "users" : {
    "mappings" : {
      "properties" : {
        "age" : {
          "type" : "long"
        },
        "email" : {
          "type" : "text",
          "fields" : {
            "keyword" : {
              "type" : "keyword",
              "ignore_above" : 256
            }
          }
        },
        "lastname" : {
          "type" : "text",
          "fields" : {
            "keyword" : {
              "type" : "keyword",
              "ignore_above" : 256
            }
          }
        },
        "name" : {
          "type" : "text",
          "fields" : {
            "keyword" : {
              "type" : "keyword",
              "ignore_above" : 256
            }
          }
        },
        "salary" : {
          "type" : "float"
        }
      }
    }
  }
}



curl --request PUT \
   --url http://localhost:9200/users/_mapping\
   --header 'content-type: application/json' \
   --data '{
 "properties": {
   "keyword_field": {
     "type": "keyword"
    }
  }
}'



