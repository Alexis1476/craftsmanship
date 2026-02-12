erDiagram

&nbsp;   USER ||--o{ ACCOUNT : "owns (OAuth)"

&nbsp;   USER ||--o{ USER\_INTEREST : "declares (deletion prohibited)"

&nbsp;   SECTION ||--o{ USER\_INTEREST : "is targeted by"

&nbsp;   

&nbsp;   USER ||--o{ ACTIVITY\_VALIDATOR : "is authorized to validate"

&nbsp;   ACTIVITY ||--o{ ACTIVITY\_VALIDATOR : "is managed by"

&nbsp;   

&nbsp;   USER ||--o{ PARTICIPATION : "participates in (Visitor)"

&nbsp;   USER ||--o{ PARTICIPATION : "validates (Student)"

&nbsp;   ACTIVITY ||--o{ PARTICIPATION : "is recorded in"



&nbsp;   SECTION ||--o{ ACTIVITY : "owns"

&nbsp;   LABEL ||--o{ ACTIVITY : "qualifies"

&nbsp;   LOCATION ||--o{ ACTIVITY : "hosts"



&nbsp;   USER {

&nbsp;       uuid id PK

&nbsp;       string email UK

&nbsp;       string full\_name "Filled at 1st login"

&nbsp;       string role "VISITOR, STUDENT, ADMIN"

&nbsp;       string avatar\_emoji "Chosen by the user"

&nbsp;       datetime created\_at

&nbsp;   }



&nbsp;   ACCOUNT {

&nbsp;       string id PK

&nbsp;       uuid user\_id FK

&nbsp;       string provider "google or azure-ad"

&nbsp;       string provider\_account\_id UK "Unique Google/MS ID"

&nbsp;       string access\_token

&nbsp;       string refresh\_token

&nbsp;   }



&nbsp;   SECTION {

&nbsp;       int id PK

&nbsp;       string name

&nbsp;       string emoji

&nbsp;   }



&nbsp;   LABEL {

&nbsp;       int id PK

&nbsp;       string name

&nbsp;       string icon

&nbsp;   }



&nbsp;   LOCATION {

&nbsp;       int id PK

&nbsp;       string building

&nbsp;       string floor

&nbsp;       string room

&nbsp;   }



&nbsp;   ACTIVITY {

&nbsp;       int id PK

&nbsp;       string title

&nbsp;       text description

&nbsp;       int points

&nbsp;       datetime start\_time

&nbsp;       datetime end\_time

&nbsp;       int section\_id FK

&nbsp;       int label\_id FK

&nbsp;       int location\_id FK

&nbsp;   }



&nbsp;   ACTIVITY\_VALIDATOR {

&nbsp;       int id PK

&nbsp;       int activity\_id FK

&nbsp;       uuid user\_id FK "The authorized student"

&nbsp;   }



&nbsp;   PARTICIPATION {

&nbsp;       int id PK

&nbsp;       uuid user\_id FK "The visitor"

&nbsp;       int activity\_id FK

&nbsp;       uuid validated\_by\_id FK "The student scanning"

&nbsp;       datetime validated\_at

&nbsp;   }



&nbsp;   USER\_INTEREST {

&nbsp;       int id PK

&nbsp;       uuid user\_id FK

&nbsp;       int section\_id FK

&nbsp;   }

