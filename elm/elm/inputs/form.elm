import Html exposing (..)
import Html.App as Html
import Html.Attributes exposing (..)
import Html.Events exposing (onInput)

main =
    Html.beginnerProgram { model = model, view = view, update = update}

-- Model
type alias Model =
    { name : String
    , email : String
    , password : String
    , passwordAgain : String
    }

model : Model
model =
    Model "" "" "" ""

-- Update
type Msg
    = Name String
    | Email String
    | Password String
    | PasswordAgain String

update : Msg -> Model -> Model
update msg model =
    case msg of
        Name name ->
            { model | name = name }
        Email email ->
            { model | email = email }
        Password password ->
            { model | password = password }
        PasswordAgain password ->
            { model | passwordAgain = password }

-- View
view : Model -> Html Msg
view model =
    div []
    [ input [ type' "text", placeholder "Name", onInput Name ] []
    , input [ type' "email", placeholder "Email", onInput Email ] []
    , input [ type' "password", placeholder "Password", onInput Password ] []
    , input [ type' "password", placeholder "Re-enter Password", onInput PasswordAgain] []
    , viewValidation model
    ]

viewValidation : Model -> Html msg
viewValidation model =
    let
        (color, message) =
            if model.password == model.passwordAgain then
                ("green", "Ok")
            else
                ("red", "Passwords does not match")
    in
        div [ style [("color", color)] ] [ text message ]
