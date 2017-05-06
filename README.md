# Basil

Textual database builder.

## Features

* Database design through a concise textual specification.
* Automatic generation of the :
  * Table data from the field names, types and properties.
  * UML schema file.
  * SQL schema and data files.
  * AQL data file.
  * Go schema and data files.

## Sample

```cpp
BLOG | count 10

    SECTION

        Id : UINT64 | key, incremented
        Number : UINT64
        Name : STRING | capacity 45
        Text : STRING
        Image : STRING | capacity 45
        ArticleIdList : ARTICLE LIST | count 5 10
        
        ImageIndex : UINT64 | !stored

    USER

        Id : UINT64 | key, incremented
        Email : STRING | capacity 45
        Pseudonym : STRING | capacity 45
        Password : STRING | capacity 45
        ItIsAdministrator : BOOL | aqlname IsAdmin

    ARTICLE

        Id : UINT64 | key, incremented
        SectionId : SECTION REF
        UserId : USER REF
        Title : STRING
        Text : STRING
        Image : STRING | capacity 45
        Date : DATETIME
        
        Section : SECTION * | !stored
        User : USER * | !stored
        
        ImageIndex : UINT64 | !stored

    COMMENT

        Id : UINT64 | key, incremented
        ArticleId : ARTICLE REF
        UserId : USER REF
        Text : STRING
        Date : DATE
        
        Article : ARTICLE * | !stored
        User : USER * | !stored

    SUBSCRIBER

        Id : UINT64 | key, incremented
        Name : STRING | capacity 45
        Email : STRING | capacity 45
```

## Syntax

```
{database name} [| {database property}, {database property}, ...]

    {table name} [| {table property}, {table property}, ...]
    
        {field name} [| {field property}, {field property}, ...]
```

### Types

```
STRING
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
DATE
DATETIME
{table} REF : table reference.
{table} LIST : list of table references.
```

### Database properties

```
count {row count}
```

### Table properties

```
count {row count}
```

### Field properties

```
[!]stored
[!]key
[!]required
[!]incremented
capacity {maximum character count}
aqlname {AQL field name}
goname {Go field name}
firstname
lastname
fullname
lowercase
uppercase
real {minimum value} {maximum value}
integer {minimum value} {maximum value}
natural {minimum value} {maximum value} [{digit count}]
name {minimum letter count} {maximum letter count}
english {minimum sentence count} {maximum sentence count}
latin  {minimum sentence count} {maximum sentence count}
```

## Installation

Install the [DMD 2 compiler](https://dlang.org/download.html).

Build the executable with the following command line :

```bash
dmd basil.d
```

Install [PlantUML](http://plantuml.com/download) (or use [www.planttext.com](https://www.planttext.com/)) to view the UML diagram.

## Command line

``` 
basil [options] database.dbs
``` 

### Options

``` 
--uml : generate the UML schema file
--sql : generate the SQL schema and data files
--aql : generate the AQL data file
--go : generate the Go schema and data files
``` 

### Examples

```bash
basil --uml blog.dbs
```

Generates "blog.uml" from "blog.dbs".

```bash
basil --uml --sql --go blog.pepss 
```

Generates "blog.uml", "blog.sql", "blog_data.sql", "blog.go" and "blog_data.go" from "blog.dbs".

## Version

0.1

## Author

Eric Pelzer (ecstatic.coder@gmail.com).

## License

This project is licensed under the GNU General Public License version 3.

See the [LICENSE.md](LICENSE.md) file for details.
