![](https://github.com/senselogic/BASIL/blob/master/LOGO/basil.png)

# Basil

Database designer and filler.

## Features

*   Describes database schemas through a concise textual specification.
*   Fills the database with user provided data.
*   Generates the remaining data based on the column names, types and properties.
*   Exports the database schema and data in the following formats :
    *   UML
    *   SQL
    *   CQL
*   Instantiates database access code for the following languages :
    *   Generis (types, routes, requests, queries, responses)
    *   Phoenix (queries)
    *   Cibyl (types)
    *   Crystal (types)
    *   C# (types)
    *   Dart (types)
    *   Javascript (types)
    *   Rust (types)

## Sample SQL schema file

```cpp
BLOG | count 5

    SECTION | dropped

        Id : UINT64 | key, unique, incremented
        Number : UINT64
        Slug : STRING = "{{Name:slug_case}}"
        Name : STRING | capacity 45
        Text : STRING
        Image : STRING | capacity 45

        ImageIndex : UINT64 | !stored

    USER | dropped

        Id : UINT64 | key, unique, incremented
        FirstName : STRING | capacity 45
        LastName : STRING | capacity 45
        Email : STRING | capacity 45, mapped
        Pseudonym : STRING | capacity 45
        Password : STRING | capacity 45
        Phone : STRING | capacity 45
        Street : STRING
        City : STRING | capacity 45
        Code : STRING | capacity 45
        Region : STRING | capacity 45
        Country : STRING | capacity 45
        Company : STRING | capacity 45
        ItIsAdministrator : BOOL

    ARTICLE | dropped, count 15

        Id : UINT64 | key, unique, incremented
        SectionId : SECTION.Id | indexed, ascending 2
        UserId : USER.Id | indexed, ascending 1
        Slug : STRING = "{{Title:slug_case}}"
        Title : STRING
        Text : STRING
        Image : STRING | capacity 45
        Date : DATE | generated

        Section : POINTER[ SECTION ] | !stored
        User : POINTER[ USER ] | !stored
        ImageIndex : UINT64 | !stored

    COMMENT | count 30, sorted

        Id : UINT64 | key, unique, incremented
        ArticleId : ARTICLE.Id | indexed
        UserId : USER.Id | indexed
        Text : STRING = "{{english 2 4 5 7}}"
        DateTime : DATETIME | generated, descending

        Article : POINTER[ ARTICLE ] | !stored
        User : POINTER[ USER ] | !stored

    SUBSCRIBER

        Id : UINT64 | key, unique, incremented
        Name : STRING | capacity 45
        Email : STRING | capacity 45, indexed, accessed
```

![](https://github.com/senselogic/BASIL/blob/master/SAMPLE/SQL/blog.png)

## Sample CQL schema file

```cpp
BLOG | count 5

    SECTION | dropped

        Uuid : UUID | key, unique
        Number : UINT64
        Slug : STRING = "{{Name:slug_case}}"
        Name : STRING
        Text : STRING
        Image : STRING

        ImageIndex : UINT64 | !stored

    USER | dropped

        Uuid : UUID | key, unique
        FirstName : STRING
        LastName : STRING
        Email : STRING
        Pseudonym : STRING
        Password : STRING
        Phone : STRING
        Street : STRING
        City : STRING
        Code : STRING
        Region : STRING
        Country : STRING
        Company : STRING
        ItIsAdministrator : BOOL

    ARTICLE | dropped, count 15

        Uuid : UUID | key, unique
        SectionUuid : SECTION.Uuid | indexed
        UserUuid : USER.Uuid | indexed
        Slug : STRING = "{{Title:slug_case}}"
        Title : STRING
        Text : STRING
        Image : STRING
        Date : DATE

        Section : POINTER[ SECTION ] | !stored
        User : POINTER[ USER ] | !stored
        ImageIndex : UINT64 | !stored

    COMMENT | count 30

        Uuid : UUID | key, unique
        ArticleUuid : ARTICLE.Uuid | indexed
        UserUuid : USER.Uuid | indexed
        Text : STRING = "{{english 2 4 5 7}}"
        DateTime : DATETIME

        Article : POINTER[ ARTICLE ] | !stored
        User : POINTER[ USER ] | !stored

    SUBSCRIBER

        Uuid : UUID | key, unique
        Name : STRING
        Email : STRING
```

![](https://github.com/senselogic/BASIL/blob/master/SAMPLE/CQL/blog.png)

## Sample data file

```
SECTION

    Number Name

        1 ~ Sports
        2 ~ Gaming
        3 ~ Entertainment
        4 ~ Science
        5 ~ History
        6 ~ Travel
        7 ~ Finance

USER

    Uuid FirstName LastName Email Pseudonym Password ItIsAdministrator

        #RickDeckard ~ Rick ~ Deckard
            ~ rick.deckard@mail.com ~ rick.deckard ~ b-263-54 ~ true

        #RachaelTyrell ~ Rachael ~ Tyrell
            ~ rachael.tyrell@outlook.com ~ rachael.tyrell ~ nexus-7 ~ false

        #ArthurDent ~ Arthur ~ Dent
            ~ arthur.dent@gmail.com ~ arthur.dent ~ 42 ~ false
```

## Sample template file

```go
<#%%PHX/test_{#variable#}_table.phx
<pre>
Table :
    {#name#} : {#type#} / {#attribute#} / {#variable#} / {#style#} / {#title#} / {#sentence#} / {#locution#}
        Properties : {#has_button#} {#button_size#}
        Columns : <%{%name%}<~!{%is_last%}<>, ~>%>
        Key columns : <@{%name%}<~!{%is_last_key%}<>, ~>@>
        Non key columns : <${%name%}<~!{%is_last_non_key%}<>, ~>$>
        Stored columns : <%^{%name%}<~!{%is_last_stored%}<>, ~>^%>
        Non Stored columns : <%°{%name%}<~!{%is_last_non_stored%}<>, ~>°%>
        Stored key columns : <@^{%name%}<~!{%is_last_stored_key%}<>, ~>^@>
        Non Stored key columns : <@°{%name%}<~!{%is_last_non_stored_key%}<>, ~>°@>
        Stored non key columns : <$^{%name%}<~!{%is_last_stored_non_key%}<>, ~>^$>
        Non Stored non key columns : <$°{%name%}<~!{%is_last_non_stored_non_key%}<>, ~>°$>
        Columns :<%
            {%name%} : {%attribute%} / {%variable%} / {%style%} / {%title%} / {%sentence%} / {%locution%}
                Properties : {%has_button%} {%button_size%}
                Go : {%go_type%} {%go_name%}
                PHP : {%php_type%} {%php_name%}
                Crystal : {%crystal_type%} {%crystal_name%}
                C# : {%csharp_type%} {%csharp_name%}
                Rust : {%rust_type%} {%rust_name%}%>
</pre>
#>
%%test_tables.gs
package main;

// -- IMPORTS

import "fmt";

// -- FUNCTIONS

func main(
    )
{
    fmt.Println( "Tables : <#{#name#}<~!{#is_last#}<>, ~>#>" );
    fmt.Println( "Stored tables : <#^{#name#}<~!{#is_last_stored#}<>, ~>^#>" );
    fmt.Println( "Non stored tables : <#°{#name#}<~!{#is_last_non_stored#}<>, ~>°#>" );
    fmt.Println( "Tables :" );<#
    fmt.Println( "    {#name#} :" );
    fmt.Println( "        Columns : <%{%name%}<~!{%is_last%}<>, ~>%>" );
    fmt.Println( "        Key columns : <@{%name%}<~!{%is_last_key%}<>, ~>@>" );
    fmt.Println( "        Non key columns : <${%name%}<~!{%is_last_non_key%}<>, ~>$>" );
    fmt.Println( "        Stored columns : <%^{%name%}<~!{%is_last_stored%}<>, ~>^%>" );
    fmt.Println( "        Non stored columns : <%°{%name%}<~!{%is_last_non_stored%}<>, ~>°%>" );
    fmt.Println( "        Stored key columns : <@^{%name%}<~!{%is_last_stored_key%}<>, ~>^@>" );
    fmt.Println( "        Non stored key columns : <@°{%name%}<~!{%is_last_non_stored_key%}<>, ~>°@>" );
    fmt.Println( "        Stored non key columns : <$^{%name%}<~!{%is_last_stored_non_key%}<>, ~>^$>" );
    fmt.Println( "        Non stored kon key columns : <$°{%name%}<~!{%is_last_non_stored_non_key%}<>, ~>°$>" );#>
}
%%test_types.go
package main;

// -- TYPES
<#
type {#go_type#} struct {<%
    {%go_name%} {%go_type%};%>
}<~!{#is_last#}<>

// ~~
~>#>
%%test_types.cs
// -- IMPORTS

using System;
using System.Collections.Generic;

// -- TYPES
<#
{#csharp_type_declaration#}
{
{#csharp_attribute_declaration#}}<~!{#is_last#}<>

// ~~
~>#>
```

## Schema file syntax

<pre>
# <i>single-line comment</i>

##
    <i>multiline comment</i>
##

@include file.bs

<i>database name</i> [| <i>database property</i>, <i>database property</i>, ...]

&nbsp;&nbsp;&nbsp;&nbsp;<i>table name</i> [| <i>table property</i>, <i>table property</i>, ...]

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<i>column name</i> : <i>column type</i> [= "<i>column template:filter:...|...</i>"] [| <i>column property</i>, <i>column property</i>, ...]
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;..

&nbsp;&nbsp;&nbsp;&nbsp;...
</pre>

### Database properties

<pre>
[!]dropped
count <i>row count</i>
</pre>

### Table properties

<pre>
[!]stored
[!]saved
[!]edited
[!]managed
[!]sorted
[!]dropped
count <i>row count</i>

[!]<i>custom property name</i>
<i>custom property name</i> <i>custom property value</i>
</pre>

### Column template functions

<pre>
natural <i>minimum value</i> <i>maximum value</i> <i>digit count</i>
integer <i>minimum value</i> <i>maximum value</i>
real <i>minimum value</i> <i>maximum value</i> [<i>precision</i>]
date <i>minimum year</i> <i>maximum year</i>
time <i>minimum hour</i> <i>maximum hour</i>
blob <i>hexadecimal digit count</i>
tuid
uuid
isbn
tag_list <i>minimum word count</i>  <i>maximum word count</i>
english <i>minimum sentence count</i> <i>maximum sentence count</i> <i>minimum word count</i> <i>maximum word count</i>
french <i>minimum sentence count</i> <i>maximum sentence count</i> <i>minimum word count</i> <i>maximum word count</i>
german <i>minimum sentence count</i> <i>maximum sentence count</i> <i>minimum word count</i> <i>maximum word count</i>
latin <i>minimum sentence count</i> <i>maximum sentence count</i> <i>minimum word count</i> <i>maximum word count</i>
spanish <i>minimum sentence count</i> <i>maximum sentence count</i> <i>minimum word count</i> <i>maximum word count</i>
name <i>minimum letter count</i> <i>maximum letter count</i>
first_name
last_name
full_name
password
phone_number
street_name
street_address
city_code
city_name
region_name
country_name
country_code
company_name
image_file_name
audio_file_name
video_file_name
file_name
folder_path
<i>column name</i>
.<i>column name</i>
<i>table name</i>.<i>column name</i>
</pre>

### Column template filters

<pre>
floor [<i>precision</i>]
ceil [<i>precision</i>]
round [<i>precision</i>]
add <i>column name</i>
add <i>integer</i>
add <i>minimum integer</i> <i>maximum integer</i>
add <i>real</i>
add <i>minimum real</i> <i>maximum real</i>
add_product <i>column name or real</i> ...
substract <i>integer</i>
substract <i>minimum integer</i> <i>maximum integer</i>
substract <i>real</i>
substract <i>minimum real</i> <i>maximum real</i>
substract <i>column name</i>
substract_product <i>column name or real</i> ...
multiply <i>column name</i>
multiply <i>integer</i>
multiply <i>minimum integer</i> <i>maximum integer</i>
multiply <i>real</i>
multiply <i>minimum real</i> <i>maximum real</i>
divide <i>column name</i>
divide <i>integer</i>
divide <i>minimum integer</i> <i>maximum integer</i>
divide <i>real</i>
divide <i>minimum real</i> <i>maximum real</i>
set <i>value</i>
prefix <i>separator</i>
add_prefix <i>prefix</i>
remove_prefix <i>prefix</i>
replace_prefix <i>old prefix</i> <i>new content</i>
suffix <i>separator</i>
add_suffix <i>suffix</i>
remove_suffix <i>suffix</i>
replace_suffix <i>old suffix</i> <i>new suffix</i>
remove <i>content</i>
replace <i>old content</i> <i>new content</i>
plural
unaccented
upper_case
lower_case
pascal_case
snake_case
kebab_case
type_case
attribute_case
variable_case
style_case
sentence_case
locution_case
slug_case
search_case
fetch <i>table name</i> <i>key column name</i> <i>value column name</i>
if this|<i>column name</i>|<i>value</i> =|!=|contains|!contains|has_prefix|!has_prefix|has_suffix|!has_suffix this|<i>column name</i>|<i>value</i>
switch this|<i>column name</i>|<i>value</i> <i>old value</i> <i>new value</i> ...
</pre>

### Column template characters

<pre>
\s : space character
\n : linefeed character
\r : return character
\t : tabulation character
\v : void string
</pre>

### Column properties

<pre>
[!]stored
[!]added
[!]edited
[!]checked
key
partitioned
clustered
indexed
filtered
grouped
mapped
accessed
processed
static
private
required
incremented
constrained
linked <i>table name</i>
optional
exhaustive
exhaustive <i>foreign column name</i> <i>sibling column name</i>
ascending [<i>order index</i>]
descending [<i>order index</i>]
generated
updated
capacity <i>maximum character count</i>
precision <i>maximum digit count</i>
sqlname <i>sql column name</i>
cqlname <i>cql column name</i>
goname <i>go field name</i>
crystalname <i>crystal field name</i>
csharpname <i>csharp field name</i>
rustname <i>rust field name</i>
count <i>minimum element count</i> <i>maximum element count</i>
count <i>element count</i>

[!]<i>custom property name</i>
<i>custom property name</i> <i>custom property value</i>
</pre>

### Field name suffixes

<pre>
Id
Year
Title
Slug
Text
FirstName
LastName
Name
Pseudonym
Password
Email
Phone
Street
Address
Code
City
Region
CountryCode
Country
Company
Image
File
Folder
Author
Isbn
Tags
</pre>

The `Pseudonym` column is based on the prior `Email` column if it exists.

The `Email`, `Login` and `Pseudonym` columns are based on the prior `FirstName` and `LastName` columns if they exist.

The `Slug` column is based on the prior `Title` or `Name` column if it exists.

### Column types

<pre>
BOOL
INT8
UINT8
INT16
UINT16
INT32
UINT32
INT64
UINT64
FLOAT32
FLOAT64
DECIMAL
STRING
STRING8
STRING16
STRING24
STRING32
TIMESTAMP
DATETIME
DATE
TIME
TUID
UUID
BLOB
<i>table name</i>.<i>column name</i>
TUPLE[ <i>field type</i>, <i>field type</i>, ... ]
TUPLE[ <i>field name</i> : <i>field type</i>, <i>field name</i> : <i>field type</i>, ... ]
LIST[ <i>element type</i> ]
LIST[ <i>element name</i> : <i>element type</i> ]
SET[ <i>element type</i> ]
SET[ <i>element name</i> : <i>element type</i> ]
MAP[ <i>key type</i>, <i>element type</i> ]
MAP[ <i>key name</i> : <i>key type</i>, <i>element name</i> : <i>element type</i> ]
OBJECT
ARRAY[ <i>element type</i> ] | !stored
POINTER[ <i>element type</i> ] | !stored
</pre>

## Data file syntax

<pre>
@include file.bd

<i>table name</i>

&nbsp;&nbsp;&nbsp;&nbsp;<i>column name</i> <i>column name</i> ...

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<i>column value</i> ~ <i>column value</i> ~ ...
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;...

&nbsp;&nbsp;&nbsp;&nbsp;...

...
</pre>

<pre>
%identifier : MD5 hash TUID
% : null TUID
#identifier : MD5 hash UUID
# : null UUID
~ : value separator
{ } : collection delimiter
{ <i>value</i> ~ <i>value</i> ~ ... } : tuple
{ <i>value</i> ~ <i>value</i> ~ ...} : list
{ <i>value</i> ~ <i>value</i> ~ ...} : set
{ { <i>key</i> ~ <i>value</i> } ~ { <i>key</i> ~ <i>value</i> } ~ ... } : map
^ : unremovable space
× : empty string
§ : new line placeholder
\ : escape character
</pre>

## Template file syntax

```
%%output file path

<#content for each table#>
<#^content for each stored table^#>
<#°content for each non stored table°#>
<#§content for each edited table§#>

<%content for each column%>
<@content for each key column@>
<$content for each non key column$>

<%^content for each stored column^%>
<@^content for each stored key column^@>
<$^content for each stored non key column^$>

<%°content for each non stored column°%>
<@°content for each non stored key column°@>
<$°content for each non stored non key column°$>

<%¨content for each added column¨%>
<@¨content for each added key column¨@>
<$¨content for each added non key column¨$>

<%§content for each edited column§%>
<@§content for each edited key column§@>
<$§content for each edited non key column§$>

<~Equals<>first text<>second text<>text if same texts~>
<~Equals<>first text<>second text<>text if same texts<>text if not same texts~>

<~!Equals<>first text<>second text<>text if not same texts~>
<~!Equals<>first text<>second text<>text if not same texts<>text if same texts~>

<~HasPrefix<>text<>prefix<>text if prefix found~>
<~HasPrefix<>text<>prefix<>text if prefix found<>text if prefix not found~>

<~!HasPrefix<>text<>prefix<>text if prefix not found~>
<~!HasPrefix<>text<>prefix<>text if prefix not found<>text if prefix found~>

<~HasSuffix<>text<>suffix<>text if suffix found~>
<~HasSuffix<>text<>suffix<>text if suffix found<>text if suffix not found~>

<~!HasSuffix<>text<>suffix<>text if suffix not found~>
<~!HasSuffix<>text<>suffix<>text if suffix not found<>text if suffix found~>

<~Contains<>text<>content<>text if content found~>
<~Contains<>text<>content<>text if content found<>text if content not found~>

<~!Contains<>text<>content<>text if content not found~>
<~!Contains<>text<>content<>text if content not found<>text if content found~>

<~IsLinux<>text for Linux platform~>
<~IsLinux<>text for Linux platform<>text for other platforms~>

<~IsMacOS<>text for MacOS platform~>
<~IsMacOS<>text for MacOS platform<>text for other platforms~>

<~IsWindows<>text for Windows platform~>
<~IsWindows<>text for Windows platform<>text for other platforms~>

<~RemovePrefix<>text<>prefix~>
<~ReplacePrefix<>text<>old prefix<>new prefix~>

<~RemoveSuffix<>text<>suffix~>
<~ReplaceSuffix<>text<>old suffix<>new suffix~>

<~Remove<>text<>content~>
<~Replace<>text<>old content<>new content~>

<~Quote<>text~>
<~Unquote<>text~>

<~LowerCase<>text~>
<~UpperCase<>text~>
<~PascalCase<>text~>
<~SnakeCase<>text~>
<~KebabCase<>text~>
<~TypeCase<>text~>
<~AttributeCase<>text~>
<~VariableCase<>text~>
<~StyleCase<>text~>
<~TitleCase<>text~>
<~SentenceCase<>text~>
<~LocutionCase<>text~>
<~SlugCase<>text~>

<~Plural<>text~>

<~Split<>variable name<>value text<>value separator<>template text~>
<~Map<>variable name<>value text<>value separator<>template text~>
<~Map<>variable name<>value text<>value separator<>sub value separator<>template text~>

<~boolean expression<>text if condition is true~>
<~boolean expression<>text if condition is true<>text if condition is false~>

{#name#}
{#attribute#}
{#variable#}
{#style#}
{#title#}
{#sentence#}
{#locution#}
{#go_type#}
{#go_attribute#}
{#go_variable#}
{#php_type#}
{#php_attribute#}
{#php_variable#}
{#crystal_type#}
{#csharp_type#}
{#csharp_attribute#}
{#csharp_variable#}
{#rust_type#}
{#javascript_type#}
{#javascript_attribute#}
{#key_attribute#}
{#key_variable#}
{#go_attribute_declaration#}
{#go_type_declaration#}
{#generis_attribute_declaration#}
{#generis_type_declaration#}
{#crystal_attribute_declaration#}
{#crystal_type_declaration#}
{#cibyl_attribute_declaration#}
{#cibyl_type_declaration#}
{#csharp_attribute_declaration#}
{#csharp_type_declaration#}
{#javascript_attribute_declaration#}
{#javascript_type_declaration#}
{#rust_attribute_declaration#}
{#rust_type_declaration#}
{#is_stored#}
{#is_non_stored#}
{#is_edited#}
{#is_non_edited#}
{#is_first#}
{#is_first_stored#}
{#is_first_non_stored#}
{#is_first_edited#}
{#is_first_non_edited#}
{#is_last#}
{#is_last_stored#}
{#is_last_non_stored#}
{#is_last_edited#}
{#is_last_non_edited#}
{#column_count#}
{#stored_column_count#}

{#<i>custom property name</i>#}
{#?<i>custom property name</i>#}

{%name%}
{%attribute%}
{%variable%}
{%style%}
{%title%}
{%sentence%}
{%locution%}
{%stored_name%}
{%stored_type%}
{%cql_name%}
{%cql_type%}
{%sql_name%}
{%sql_type%}
{%go_name%}
{%go_type%}
{%go_attribute%}
{%go_variable%}
{%php_name%}
{%php_type%}
{%php_attribute%}
{%php_variable%}
{%php_default%}
{%crystal_name%}
{%crystal_type%}
{%csharp_name%}
{%csharp_type%}
{%csharp_attribute%}
{%csharp_variable%}
{%rust_name%}
{%rust_type%}
{%javascript_name%}
{%is_boolean%}
{%is_natural%}
{%is_integer%}
{%is_real%}
{%is_number%}
{%is_string%}
{%is_datetime%}
{%is_date%}
{%is_time%}
{%is_tuid%}
{%is_uuid%}
{%is_scalar%}
{%is_blob%}
{%is_tuple%}
{%is_list%}
{%is_set%}
{%is_map%}
{%is_object%}
{%is_compound%}
{%is_key%}
{%is_non_key%}
{%is_stored%}
{%is_non_stored%}
{%is_stored_key%}
{%is_non_stored_key%}
{%is_stored_non_key%}
{%is_non_stored_non_key%}
{%is_added%}
{%is_non_added%}
{%is_added_key%}
{%is_non_added_key%}
{%is_added_non_key%}
{%is_non_added_non_key%}
{%is_edited%}
{%is_non_edited%}
{%is_edited_key%}
{%is_non_edited_key%}
{%is_edited_non_key%}
{%is_non_edited_non_key%}
{%is_incremented%}
{%is_first%}
{%is_first_key%}
{%is_first_non_key%}
{%is_first_stored%}
{%is_first_non_stored%}
{%is_first_stored_key%}
{%is_first_non_stored_key%}
{%is_first_stored_non_key%}
{%is_first_non_stored_non_key%}
{%is_first_added%}
{%is_first_non_added%}
{%is_first_added_key%}
{%is_first_non_added_key%}
{%is_first_added_non_key%}
{%is_first_non_added_non_key%}
{%is_first_edited%}
{%is_first_non_edited%}
{%is_first_edited_key%}
{%is_first_non_edited_key%}
{%is_first_edited_non_key%}
{%is_first_non_edited_non_key%}
{%is_first_incremented%}
{%is_first_non_incremented%}
{%is_last%}
{%is_last_key%}
{%is_last_non_key%}
{%is_last_stored%}
{%is_last_non_stored%}
{%is_last_stored_key%}
{%is_last_non_stored_key%}
{%is_last_stored_non_key%}
{%is_last_non_stored_non_key%}
{%is_last_added%}
{%is_last_non_added%}
{%is_last_added_key%}
{%is_last_non_added_key%}
{%is_last_added_non_key%}
{%is_last_non_added_non_key%}
{%is_last_edited%}
{%is_last_non_edited%}
{%is_last_edited_key%}
{%is_last_non_edited_key%}
{%is_last_edited_non_key%}
{%is_last_non_edited_non_key%}
{%is_last_incremented%}
{%is_last_non_incremented%}

{%<i>custom property name</i>%}
{%?<i>custom property name</i>%}

%\%ignored tag
<\#ignored tags#\>
<\%ignored tags%\>
<\@ignored tags@\>
<\$ignored tags$\>
<\#^ignored tags^#\>
<\%^ignored tags^%\>
<\@^ignored tags^@\>
<\$^ignored tags^$\>
<\#°ignored tags°#\>
<\%°ignored tags°%\>
<\@°ignored tags°@\>
<\$°ignored tags°$\>
<\~ignored<\>tags~\>
{\#ignored tags#\}
{\%ignored tags%\}
```

### Boolean expression syntax

```
true
false
!...
... && ...
... || ...
( ... )
```

## Installation

Install the [DMD 2 compiler](https://dlang.org/download.html) (using the MinGW setup option on Windows).

Build the executable with the following command line :

```bash
dmd -m64 basil.d
```

The UML diagrams can be drawn using [PlantText](https://www.planttext.com/) or [PlantUML](http://plantuml.com/).

## Command line

```
basil [options] script_file.bs [script_file.bs|bd|bt|csv ...]
```

### File extensions

```
.bs : schema
.bd, .csv : data
.bt : template
```

### Options

```
--prefix : output file name prefix
--suffix : output file name suffix
--uml : generate an UML schema file
--mysql : generate MySQL schema and data files
--postgresql : generate PostgreSQL schema and data files
--cassandra : generate Cassandra schema and data files
--json : generate a JSON data file
--csv : generate CSV data files
--go : generate a Go type file
--generis : generate Generis type, query, response, request and route files
--phoenix : generate Phoenix query files
--crystal : generate a Crystal type file
--csharp : generate a C# type file
--dart : generate Dart type files
--javascript : generate a Javascript type file
--rust : generate a Rust type file
--ignore-drop : ignore drop command
--force-drop : force drop command
--exclude-command <command_name>
--verbose : show processed content
```

The `--mysql`, `--postgresql` and `--cassandra` are mutually exclusive.

### Examples

```bash
basil --uml blog.bs
```

Generates `blog.uml` from `blog.bs`.

```bash
basil --uml --mysql --go blog.bs
```

Generates `blog.uml`, `blog.sql`, `blog_schema.sql`, `blog_data.sql`, `blog_sql_type.go` from `blog.bs`.

```bash
basil --uml --cassandra --go blog.bs blog.bt
```

Generates `blog.uml`, `blog.cql`, `blog_schema.cql`, `blog_data.cql`, `blog_sql_type.go` from `blog.bs`, and other custom files from `blog.bt`.

## Version

8.0

## Author

Eric Pelzer (ecstatic.coder@gmail.com).

## License

This project is licensed under the GNU General Public License version 3.

See the [LICENSE.md](LICENSE.md) file for details.
