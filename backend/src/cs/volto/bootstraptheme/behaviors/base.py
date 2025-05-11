import json

OBJECT_LIST_DEFAULT_VALUE = []

OBJECT_LIST = json.dumps(
    {
        "type": "array",
        "items": {
            "type": "object",
        },
    }
)
