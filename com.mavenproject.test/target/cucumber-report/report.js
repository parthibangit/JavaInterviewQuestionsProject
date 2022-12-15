$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("basicApi.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#Author: Parthiban Subburam"
    },
    {
      "line": 2,
      "value": "#Start Date: 19-03-2020"
    }
  ],
  "line": 3,
  "name": "Creating user details",
  "description": "",
  "id": "creating-user-details",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 6,
  "name": "Create user in application through API",
  "description": "",
  "id": "creating-user-details;create-user-in-application-through-api",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 5,
      "name": "@api1"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "user set up a data for creation",
  "rows": [
    {
      "cells": [
        "Male",
        "Active"
      ],
      "line": 8
    }
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "create user through API with token \"Bearer 225b80da07ba3f67f173a592b61bf7c441a42897a79fb648da2d1f7fe8152a97\"",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "capture the user response and verify the user details",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "user display the response",
  "keyword": "And "
});
formatter.match({
  "location": "SdCreateUser.user_set_up_a_data_for_creation(DataTable)"
});
formatter.result({
  "duration": 320955000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Bearer 225b80da07ba3f67f173a592b61bf7c441a42897a79fb648da2d1f7fe8152a97",
      "offset": 36
    }
  ],
  "location": "SdCreateUser.create_user_through_API_with_token(String)"
});
formatter.result({
  "duration": 7788433500,
  "status": "passed"
});
formatter.match({
  "location": "SdCreateUser.capture_the_user_response_and_verify_the_user_details()"
});
formatter.result({
  "duration": 719962400,
  "status": "passed"
});
formatter.match({
  "location": "SdCreateUser.user_display_the_response()"
});
formatter.result({
  "duration": 107521900,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 14,
  "name": "Fetch the user using path parameter",
  "description": "",
  "id": "creating-user-details;fetch-the-user-using-path-parameter",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 13,
      "name": "@api2"
    }
  ]
});
formatter.step({
  "line": 15,
  "name": "user set path parameters for code \u003ccode\u003e",
  "keyword": "Given "
});
formatter.step({
  "line": 16,
  "name": "user send the request with \"path\" parameter",
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "user display the response",
  "keyword": "And "
});
formatter.examples({
  "line": 19,
  "name": "",
  "description": "",
  "id": "creating-user-details;fetch-the-user-using-path-parameter;",
  "rows": [
    {
      "cells": [
        "code"
      ],
      "line": 20,
      "id": "creating-user-details;fetch-the-user-using-path-parameter;;1"
    },
    {
      "cells": [
        "200"
      ],
      "line": 21,
      "id": "creating-user-details;fetch-the-user-using-path-parameter;;2"
    },
    {
      "cells": [
        "201"
      ],
      "line": 22,
      "id": "creating-user-details;fetch-the-user-using-path-parameter;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 21,
  "name": "Fetch the user using path parameter",
  "description": "",
  "id": "creating-user-details;fetch-the-user-using-path-parameter;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 13,
      "name": "@api2"
    }
  ]
});
formatter.step({
  "line": 15,
  "name": "user set path parameters for code 200",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 16,
  "name": "user send the request with \"path\" parameter",
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "user display the response",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 34
    }
  ],
  "location": "SdCreateUser.user_set_path_parameters_for_code(String)"
});
formatter.result({
  "duration": 26709000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "path",
      "offset": 28
    }
  ],
  "location": "SdCreateUser.user_send_the_request(String)"
});
formatter.result({
  "duration": 625197700,
  "status": "passed"
});
formatter.match({
  "location": "SdCreateUser.user_display_the_response()"
});
formatter.result({
  "duration": 1419000,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
  "name": "Fetch the user using path parameter",
  "description": "",
  "id": "creating-user-details;fetch-the-user-using-path-parameter;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 13,
      "name": "@api2"
    }
  ]
});
formatter.step({
  "line": 15,
  "name": "user set path parameters for code 201",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 16,
  "name": "user send the request with \"path\" parameter",
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "user display the response",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "201",
      "offset": 34
    }
  ],
  "location": "SdCreateUser.user_set_path_parameters_for_code(String)"
});
formatter.result({
  "duration": 2258400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "path",
      "offset": 28
    }
  ],
  "location": "SdCreateUser.user_send_the_request(String)"
});
formatter.result({
  "duration": 642367000,
  "status": "passed"
});
formatter.match({
  "location": "SdCreateUser.user_display_the_response()"
});
formatter.result({
  "duration": 3729700,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 25,
  "name": "Fetch the user details using query parameter",
  "description": "",
  "id": "creating-user-details;fetch-the-user-details-using-query-parameter",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 24,
      "name": "@api3"
    }
  ]
});
formatter.step({
  "line": 26,
  "name": "user set query parameters for \"\u003cname\u003e\" and \"\u003cstatus\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 27,
  "name": "user send the request with \"query\" parameter",
  "keyword": "When "
});
formatter.step({
  "line": 28,
  "name": "user display the response",
  "keyword": "And "
});
formatter.examples({
  "line": 30,
  "name": "",
  "description": "",
  "id": "creating-user-details;fetch-the-user-details-using-query-parameter;",
  "rows": [
    {
      "cells": [
        "name",
        "status"
      ],
      "line": 31,
      "id": "creating-user-details;fetch-the-user-details-using-query-parameter;;1"
    },
    {
      "cells": [
        "vetri",
        "Active"
      ],
      "line": 32,
      "id": "creating-user-details;fetch-the-user-details-using-query-parameter;;2"
    },
    {
      "cells": [
        "Parthiban",
        "Active"
      ],
      "line": 33,
      "id": "creating-user-details;fetch-the-user-details-using-query-parameter;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 32,
  "name": "Fetch the user details using query parameter",
  "description": "",
  "id": "creating-user-details;fetch-the-user-details-using-query-parameter;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 24,
      "name": "@api3"
    }
  ]
});
formatter.step({
  "line": 26,
  "name": "user set query parameters for \"vetri\" and \"Active\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 27,
  "name": "user send the request with \"query\" parameter",
  "keyword": "When "
});
formatter.step({
  "line": 28,
  "name": "user display the response",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "vetri",
      "offset": 31
    },
    {
      "val": "Active",
      "offset": 43
    }
  ],
  "location": "SdCreateUser.user_set_query_parameters_for_and(String,String)"
});
formatter.result({
  "duration": 6134900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "query",
      "offset": 28
    }
  ],
  "location": "SdCreateUser.user_send_the_request(String)"
});
formatter.result({
  "duration": 645588600,
  "status": "passed"
});
formatter.match({
  "location": "SdCreateUser.user_display_the_response()"
});
formatter.result({
  "duration": 3105100,
  "status": "passed"
});
formatter.scenario({
  "line": 33,
  "name": "Fetch the user details using query parameter",
  "description": "",
  "id": "creating-user-details;fetch-the-user-details-using-query-parameter;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 24,
      "name": "@api3"
    }
  ]
});
formatter.step({
  "line": 26,
  "name": "user set query parameters for \"Parthiban\" and \"Active\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 27,
  "name": "user send the request with \"query\" parameter",
  "keyword": "When "
});
formatter.step({
  "line": 28,
  "name": "user display the response",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "Parthiban",
      "offset": 31
    },
    {
      "val": "Active",
      "offset": 47
    }
  ],
  "location": "SdCreateUser.user_set_query_parameters_for_and(String,String)"
});
formatter.result({
  "duration": 6316300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "query",
      "offset": 28
    }
  ],
  "location": "SdCreateUser.user_send_the_request(String)"
});
formatter.result({
  "duration": 576386400,
  "status": "passed"
});
formatter.match({
  "location": "SdCreateUser.user_display_the_response()"
});
formatter.result({
  "duration": 1900400,
  "status": "passed"
});
});