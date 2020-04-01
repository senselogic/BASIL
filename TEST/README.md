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
    *   Rust (types)

## Sample SQL schema file

```cpp
BLOG | dropped, count 5

    SECTION

        Id : UINT64 | key, unique, incremented
        Number : UINT64
        Name : STRING | capacity 45
        Text : STRING
        Image : STRING | capacity 45

        ImageIndex : UINT64 | !stored

    USER

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

    ARTICLE | count 15

        Id : UINT64 | key, unique, incremented
        SectionId : SECTION.Id | indexed, ascending 2
        UserId : USER.Id | indexed, ascending 1
        Title : STRING
        Text : STRING
        Image : STRING | capacity 45
        Date : DATE | now

        Section : POINTER[ SECTION ] | !stored
        User : POINTER[ USER ] | !stored
        ImageIndex : UINT64 | !stored

    COMMENT | count 30, sorted

        Id : UINT64 | key, unique, incremented
        ArticleId : ARTICLE.Id | indexed
        UserId : USER.Id | indexed
        Text : STRING | english 2 4 5 7
        DateTime : DATETIME | now, descending

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
BLOG | dropped, count 5

    SECTION

        Uuid : UUID | key, unique
        Number : UINT64
        Name : STRING
        Text : STRING
        Image : STRING

        ImageIndex : UINT64 | !stored

    USER

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

    ARTICLE | count 15

        Uuid : UUID | key, unique
        SectionUuid : SECTION.Uuid | indexed
        UserUuid : USER.Uuid | indexed
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
        Text : STRING | english 2 4 5 7
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
<%%%PHX/test_{{table_variable}}_table.phx
<pre>
Table :
    {{table_name}} : {{table_type}} {{table_attribute}} {{table_variable}} {{table_style}}
Columns :<~
    {{column_name}} : {{column_attribute}} {{column_variable}} {{column_style}}
        Go : {{column_go_type}} {{column_go_name}}
        PHP : {{column_php_type}} {{column_php_name}}
        Crystal : {{column_crystal_type}} {{column_crystal_name}}
        C# : {{column_csharp_type}} {{column_csharp_name}}
        Rust : {{column_rust_type}} {{column_rust_name}} ~>
Key columns : <@{{column_name}}<?!{{column_is_last_key}}#, ?>@>
Non key columns : <${{column_name}}<?!{{column_is_last_non_key}}#, ?>$>
</pre>
%>
%%test_tables.gs
package main;

// -- IMPORTS

import "fmt";

// -- FUNCTIONS

func main(
    )
{
    fmt.Println( "Tables :" );
<%    fmt.Println( "    {{table_name}}<?!{{table_is_last}}#,?>" );
    fmt.Println( "        Columns :" );
<~    fmt.Println( "            {{column_name}}<?!{{column_is_last}}#,?>" );
~>    fmt.Println( "        Key columns :" );
<@    fmt.Println( "            {{column_name}}<?!{{column_is_last_key}}#,?>" );
@>    fmt.Println( "        Non key columns :" );
<$    fmt.Println( "            {{column_name}}<?!{{column_is_last_non_key}}#,?>" );
$>    fmt.Println( "        Stored columns :" );
<~<?{{column_is_stored}}#    fmt.Println( "            {{column_name}}<?!{{column_is_last_stored}}#,?>" );
?>~>    fmt.Println( "        Non stored columns :" );
<~<?!{{column_is_stored}}#    fmt.Println( "            {{column_name}}<?!{{column_is_last_non_stored}}#,?>" );
?>~>%>}
```

## Schema file syntax

<pre>
-- <i>comment</i>

<i>database_name</i> [| <i>database_property</i>, <i>database_property</i>, ...]

&nbsp;&nbsp;&nbsp;&nbsp;<i>table_name</i> [| <i>table_property</i>, <i>table_property</i>, ...]

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<i>column_name</i> : <i>column_type</i> [| <i>column_property</i>, <i>column_property</i>, ...]
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;..

&nbsp;&nbsp;&nbsp;&nbsp;...
</pre>

### Database properties

<pre>
[!]dropped
count <i>row_count</i>
</pre>

### Table properties

<pre>
[!]stored
[!]sorted
[!]dropped
count <i>row_count</i>
</pre>

### Column data

#### Functions

Real <i>minimum_value</i> <i>maximum_value</i>
Integer <i>minimum_value</i> <i>maximum_value</i>
Natural <i>minimum_value</i> <i>maximum_value</i> [<i>digit_count</i>]
English <i>minimum_sentence_count</i> <i>maximum_sentence_count</i> <i>minimum_word_count</i> <i>maximum_word_count</i>
Latin <i>minimum_sentence_count</i> <i>maximum_sentence_count</i> <i>minimum_word_count</i> <i>maximum_word_count</i>
Name <i>minimum_letter_count</i> <i>maximum_letter_count</i>
FirstName
LastName
FullName

#### Filters

<pre>
LowerCase
UpperCase
MinorCase
MajorCase
SnakeCase
PascalCase
CamelCase
RemoveComments
RemoveBlanks
PackStrings
PackIdentifiers
ReplaceText old_text new_text
ReplacePrefix old_prefix new_prefix
ReplaceSuffix old_suffix new_suffix
ReplaceIdentifier old_identifier new_identifier
RemoveText text
RemovePrefix prefix
RemoveSuffix suffix
RemoveIdentifier identifier
</pre>

### Column properties

<pre>
[!]stored
[!]key
[!]partitioned
[!]clustered
[!]indexed
[!]mapped
[!]accessed
[!]static
[!]required
[!]incremented
[!]constrained
ascending [<i>order index</i>]
descending [<i>order index</i>]
now
capacity <i>maximum_character_count</i>
sqlname <i>sql_column_name</i>
cqlname <i>cql_column_name</i>
goname <i>go_field_name</i>
crystalname <i>crystal_field_name</i>
csharpname <i>csharp_field_name</i>
rustname <i>rust_field_name</i>
count <i>minimum_element_count</i> <i>maximum_element_count</i>
count <i>element_count</i>
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
STRING
STRING8
STRING16
STRING24
STRING32
DATETIME
DATE
TIME
UUID
BLOB
<i>TABLE_NAME</i>.<i>ColumnName</i>
TUPLE[ <i>FIELD_TYPE</i>, <i>FIELD_TYPE</i>, ... ]
TUPLE[ <i>FieldName</i> : <i>FIELD_TYPE</i>, <i>FieldName</i> : <i>FIELD_TYPE</i>, ... ]
LIST[ <i>ELEMENT_TYPE</i> ]
LIST[ <i>ElementName</i> : <i>ELEMENT_TYPE</i> ]
SET[ <i>ELEMENT_TYPE</i> ]
SET[ <i>ElementName</i> : <i>ELEMENT_TYPE</i> ]
MAP[ <i>KEY_TYPE</i>, <i>ELEMENT_TYPE</i> ]
MAP[ <i>KeyName</i> : <i>KEY_TYPE</i>, <i>ElementName</i> : <i>ELEMENT_TYPE</i> ]
ARRAY[ <i>ELEMENT_TYPE</i> ] | !stored
POINTER[ <i>ELEMENT_TYPE</i> ] | !stored
</pre>

## Data file syntax

<pre>
<i>table_name</i>

&nbsp;&nbsp;&nbsp;&nbsp;<i>column_name</i> <i>column_name</i> ...

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<i>column_value</i> ~ <i>column_value</i> ~ ...
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;...

&nbsp;&nbsp;&nbsp;&nbsp;...

...
</pre>

<pre>
%identifier : CRC64 hash INT64
#identifier : MD5 hash UUID
# : null UUID
~ : value separator
{ } : collection delimiter
{ <i>value</i> ~ <i>value</i> ~ ... } : tuple
{ <i>value</i> ~ <i>value</i> ~ ...} : list
{ <i>value</i> ~ <i>value</i> ~ ...} : set
{ { <i>key</i> ~ <i>value</i> } ~ { <i>key</i> ~ <i>value</i> } ~ ... } : map
^ : unremovable space
§ : unreplaced new line symbol
\ : escape character
</pre>

## Template file syntax

```
%%output file path

<%content for each table%>
<~content for each column~>
<@content for each key column@>
<$content for each non key column$>

<?Equals#first text#second text#text if same texts?>
<?Equals#first text#second text#text if same texts#text if not same texts?>

<?!Equals#first text#second text#text if not same texts?>
<?!Equals#first text#second text#text if not same texts#text if same texts?>

<?HasPrefix#text#prefix#text if prefix found?>
<?HasPrefix#text#prefix#text if prefix found#text if prefix not found?>

<?!HasPrefix#text#prefix#text if prefix not found?>
<?!HasPrefix#text#prefix#text if prefix not found#text if prefix found?>

<?HasSuffix#text#suffix#text if suffix found?>
<?HasSuffix#text#suffix#text if suffix found#text if suffix not found?>

<?!HasSuffix#text#suffix#text if suffix not found?>
<?!HasSuffix#text#suffix#text if suffix not found#text if suffix found?>

<?Contains#text#content#text if content found?>
<?Contains#text#content#text if content found#text if content not found?>

<?!Contains#text#content#text if content not found?>
<?!Contains#text#content#text if content not found#text if content found?>

<?RemovePrefix#prefix?>
<?ReplacePrefix#old prefix#new prefix?>

<?RemoveSuffix#suffix?>
<?ReplaceSuffix#old suffix#new suffix?>

<?Remove#content?>
<?Replace#old content#new content?>

<?PascalCase#text?>
<?SnakeCase#text?>
<?KebabCase#text?>
<?LowerCase#text?>
<?UpperCase#text?>
<?TypeCase#text?>
<?AttributeCase#text?>
<?VariableCase#text?>
<?StyleCase#text?>

<?boolean expression#text if condition is true?>
<?boolean expression#text if condition is true#text if condition is false?>

{{column_name}}
{{column_attribute}}
{{column_variable}}
{{column_style}}
{{column_stored_name}}
{{column_stored_type}}
{{column_cql_name}}
{{column_cql_type}}
{{column_sql_name}}
{{column_sql_type}}
{{column_go_name}}
{{column_go_type}}
{{column_go_attribute}}
{{column_go_variable}}
{{column_php_name}}
{{column_php_type}}
{{column_php_attribute}}
{{column_php_variable}}
{{column_crystal_name}}
{{column_crystal_type}}
{{column_csharp_name}}
{{column_csharp_type}}
{{column_csharp_attribute}}
{{column_csharp_variable}}
{{column_rust_name}}
{{column_rust_type}}
{{column_javascript_name}}
{{column_is_last}}
{{column_is_stored}}
{{column_is_last_stored}}
{{column_is_last_non_stored}}
{{column_is_key}}
{{column_is_last_key}}
{{column_is_last_non_key}}
{{column_is_incremented}}
{{column_is_last_incremented}}
{{column_is_last_non_incremented}}

{{table_name}}
{{table_attribute}}
{{table_variable}}
{{table_style}}
{{table_go_type}}
{{table_go_attribute}}
{{table_go_variable}}
{{table_php_type}}
{{table_php_attribute}}
{{table_php_variable}}
{{table_crystal_type}}
{{table_csharp_type}}
{{table_csharp_attribute}}
{{table_csharp_variable}}
{{table_rust_type}}
{{table_javascript_type}}
{{table_javascript_attribute}}
{{table_go_attribute_declaration}}
{{table_go_type_declaration}}
{{table_generis_attribute_declaration}}
{{table_generis_type_declaration}}
{{table_crystal_attribute_declaration}}
{{table_crystal_type_declaration}}
{{table_cibyl_attribute_declaration}}
{{table_cibyl_type_declaration}}
{{table_csharp_attribute_declaration}}
{{table_csharp_type_declaration}}
{{table_javascript_attribute_declaration}}
{{table_javascript_type_declaration}}
{{table_rust_attribute_declaration}}
{{table_rust_type_declaration}}
{{table_is_last}}
{{table_is_stored}}
{{table_is_last_stored}}
{{table_is_last_non_stored}}

%\%ignored
<\%ignored%\>
<\~ignored~\>
<\@ignored@\>
<\$ignored$\>
{\?ignored?\}
{\{ignored}\}
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
basil [options] script_file.bs [script_file.bs|bd|bt ...]
```

### File extensions

```
.bs : schema
.bd : data
.bt : template
```

### Options

```
--uml : generate the UML schema file
--sql : generate the SQL schema and data files
--cql : generate the CQL schema and data files
--json : generate the JSON data file
--go : generate the Go type file
--generis : generate the Generis type, query, response, request and route files
--phoenix : generate the Phoenix query files
--crystal : generate the Crystal type file
--csharp : generate the C# type file
--rust : generate the Rust type file
--javascript : generate the Javascript type file
```

The `--sql` and `--cql` options are mutually exclusive.

The `--json`, `--go`, `--generis`, `--crystal`, `--csharp`, `--rust` and `--javascript` options require the `--sql` or the `--cql` option.

### Examples

```bash
basil --uml blog.bs
```

Generates `blog.uml` from `blog.bs`.

```bash
basil --uml --sql --go blog.bs
```

Generates `blog.uml`, `blog.sql`, `blog_data.sql`, `blog_sql_type.go` from `blog.bs`.

```bash
basil --uml --cql --go blog.bs blog.bt
```

Generates `blog.uml`, `blog.sql`, `blog_data.sql`, `blog_sql_type.go` from `blog.bs`, and other custom files from `blog.bt`.

## Version

4.0

## Author

Eric Pelzer (ecstatic.coder@gmail.com).

## License

This project is licensed under the GNU General Public License version 3.

See the [LICENSE.md](LICENSE.md) file for details.