package main;

// -- IMPORTS

import "fmt";

// -- FUNCTIONS

func main(
    )
{
    fmt.Println( "Tables : SIMPLE, COMPOUND, VALUE, VALUE_DATA, INTERNAL_DATA" );
    fmt.Println( "Stored tables : SIMPLE, COMPOUND, VALUE, VALUE_DATA" );
    fmt.Println( "Non stored tables : INTERNAL_DATA" );
    fmt.Println( "Tables :" );
    fmt.Println( "    SIMPLE :" );
    fmt.Println( "        Columns : Uuid, Bool, Int8, Uint8, Int16, Uint16, Int32, Uint32, Int64, Uint64, Float32, Float64, String, Name, Date, DateTime, Blob, Option, EnglishText, FrenchText, GermanText, LatinText, SpanishText, Integer, Natural, Real, Address, CategorySlug, CategoryName, CategorySection" );
    fmt.Println( "        Key columns : Uuid" );
    fmt.Println( "        Non key columns : Bool, Int8, Uint8, Int16, Uint16, Int32, Uint32, Int64, Uint64, Float32, Float64, String, Name, Date, DateTime, Blob, Option, EnglishText, FrenchText, GermanText, LatinText, SpanishText, Integer, Natural, Real, Address, CategorySlug, CategoryName, CategorySection" );
    fmt.Println( "        Stored columns : Uuid, Bool, Int8, Uint8, Int16, Uint16, Int32, Uint32, Int64, Uint64, Float32, Float64, String, Name, Date, DateTime, Blob, Option, EnglishText, FrenchText, GermanText, LatinText, SpanishText, Integer, Natural, Real, Address, CategorySlug, CategoryName, CategorySection" );
    fmt.Println( "        Non stored columns : " );
    fmt.Println( "        Stored key columns : Uuid" );
    fmt.Println( "        Non stored key columns : " );
    fmt.Println( "        Stored non key columns : Bool, Int8, Uint8, Int16, Uint16, Int32, Uint32, Int64, Uint64, Float32, Float64, String, Name, Date, DateTime, Blob, Option, EnglishText, FrenchText, GermanText, LatinText, SpanishText, Integer, Natural, Real, Address, CategorySlug, CategoryName, CategorySection" );
    fmt.Println( "        Non stored kon key columns : " );
    fmt.Println( "    COMPOUND :" );
    fmt.Println( "        Columns : Id, Location, Name, NameSet, PhoneList, EmailSet, CompanyMap, SimpleDate, SimpleDateMap, SimpleDateSet, SimpleDateList, NameSetMap, Text, TextArray, OtherTextArray, SimplePointerArray" );
    fmt.Println( "        Key columns : Id" );
    fmt.Println( "        Non key columns : Location, Name, NameSet, PhoneList, EmailSet, CompanyMap, SimpleDate, SimpleDateMap, SimpleDateSet, SimpleDateList, NameSetMap, Text, TextArray, OtherTextArray, SimplePointerArray" );
    fmt.Println( "        Stored columns : Id, Location, Name, NameSet, PhoneList, EmailSet, CompanyMap, SimpleDate, SimpleDateMap, SimpleDateSet, SimpleDateList, NameSetMap, Text, TextArray, OtherTextArray" );
    fmt.Println( "        Non stored columns : SimplePointerArray" );
    fmt.Println( "        Stored key columns : Id" );
    fmt.Println( "        Non stored key columns : " );
    fmt.Println( "        Stored non key columns : Location, Name, NameSet, PhoneList, EmailSet, CompanyMap, SimpleDate, SimpleDateMap, SimpleDateSet, SimpleDateList, NameSetMap, Text, TextArray, OtherTextArray" );
    fmt.Println( "        Non stored kon key columns : SimplePointerArray" );
    fmt.Println( "    VALUE :" );
    fmt.Println( "        Columns : Tuid, Uuid, Name, Integer, Text" );
    fmt.Println( "        Key columns : Tuid" );
    fmt.Println( "        Non key columns : Uuid, Name, Integer, Text" );
    fmt.Println( "        Stored columns : Tuid, Uuid, Name, Integer, Text" );
    fmt.Println( "        Non stored columns : " );
    fmt.Println( "        Stored key columns : Tuid" );
    fmt.Println( "        Non stored key columns : " );
    fmt.Println( "        Stored non key columns : Uuid, Name, Integer, Text" );
    fmt.Println( "        Non stored kon key columns : " );
    fmt.Println( "    VALUE_DATA :" );
    fmt.Println( "        Columns : Uuid, ValueTuid, ValueUuid, InternalId, InternalUuid, InternalValueId, InternalValueUuid" );
    fmt.Println( "        Key columns : Uuid" );
    fmt.Println( "        Non key columns : ValueTuid, ValueUuid, InternalId, InternalUuid, InternalValueId, InternalValueUuid" );
    fmt.Println( "        Stored columns : Uuid, ValueTuid, ValueUuid" );
    fmt.Println( "        Non stored columns : InternalId, InternalUuid, InternalValueId, InternalValueUuid" );
    fmt.Println( "        Stored key columns : Uuid" );
    fmt.Println( "        Non stored key columns : " );
    fmt.Println( "        Stored non key columns : ValueTuid, ValueUuid" );
    fmt.Println( "        Non stored kon key columns : InternalId, InternalUuid, InternalValueId, InternalValueUuid" );
    fmt.Println( "    INTERNAL_DATA :" );
    fmt.Println( "        Columns : Id, Uuid, ValueTuid, ValueUuid, FirstName, LastName, IsAwesome" );
    fmt.Println( "        Key columns : Id, Uuid" );
    fmt.Println( "        Non key columns : ValueTuid, ValueUuid, FirstName, LastName, IsAwesome" );
    fmt.Println( "        Stored columns : Id, ValueTuid, ValueUuid" );
    fmt.Println( "        Non stored columns : Uuid, FirstName, LastName, IsAwesome" );
    fmt.Println( "        Stored key columns : Id" );
    fmt.Println( "        Non stored key columns : Uuid" );
    fmt.Println( "        Stored non key columns : ValueTuid, ValueUuid" );
    fmt.Println( "        Non stored kon key columns : FirstName, LastName, IsAwesome" );
}
