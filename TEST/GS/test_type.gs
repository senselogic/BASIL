type SIMPLE struct
{
    Uuid gocql.UUID    `db:"Uuid"`;
    Bool bool    `db:"Bool"`;
    Int8 int8    `db:"Int8"`;
    Uint8 uint8    `db:"Uint8"`;
    Int16 int16    `db:"Int16"`;
    Uint16 uint16    `db:"Uint16"`;
    Int32 int32    `db:"Int32"`;
    Uint32 uint32    `db:"Uint32"`;
    Int64 int64    `db:"Int64"`;
    Uint64 uint64    `db:"Uint64"`;
    Float32 float32    `db:"Float32"`;
    Float64 float64    `db:"Float64"`;
    String string    `db:"String"`;
    Name string    `db:"Name"`;
    Date time.Time    `db:"Date"`;
    DateTime time.Time    `db:"DateTime"`;
    Blob [] byte    `db:"Blob"`;
    Option string    `db:"Option"`;
    EnglishText string    `db:"EnglishText"`;
    FrenchText string    `db:"FrenchText"`;
    GermanText string    `db:"GermanText"`;
    LatinText string    `db:"LatinText"`;
    SpanishText string    `db:"SpanishText"`;
    Integer int64    `db:"Integer"`;
    Natural uint64    `db:"Natural"`;
    Real float64    `db:"Real"`;
    Address string    `db:"Address"`;
    CategorySlug string    `db:"CategorySlug"`;
    CategoryName string    `db:"CategoryName"`;
    CategorySection string    `db:"CategorySection"`;
}

// ~~

type COMPOUND struct
{
    Id int32    `db:"Id"`;
    Location string    `db:"Location"`;
    Name STRING_STRING_TUPLE    `db:"Name"`;
    NameSet STRING_STRING_TUPLE_SET    `db:"NameSet"`;
    PhoneList STRING_LIST    `db:"PhoneList"`;
    EmailSet STRING_SET    `db:"EmailSet"`;
    CompanyMap STRING_STRING_MAP    `db:"CompanyMap"`;
    SimpleDate time.Time    `db:"SimpleDate"`;
    SimpleDateMap STRING_STRING_TUPLE_TIME.TIME_MAP    `db:"SimpleDateMap"`;
    SimpleDateSet TIME.TIME_SET    `db:"SimpleDateSet"`;
    SimpleDateList TIME.TIME_LIST    `db:"SimpleDateList"`;
    NameSetMap TIME.TIME_STRING_STRING_TUPLE_SET_MAP    `db:"NameSetMap"`;
    Text string    `db:"Text"`;
    TextArray STRING_LIST    `db:"TextArray"`;
    OtherTextArray STRING_LIST    `db:"OtherTextArray"`;
    SimplePointerArray [] * SIMPLE    `db:"-"`;
}

// ~~

type VALUE struct
{
    Tuid string    `db:"Tuid"`;
    Uuid gocql.UUID    `db:"Uuid"`;
    Name string    `db:"Name"`;
    Integer int32    `db:"Integer"`;
    Text string    `db:"Text"`;
}

// ~~

type VALUE_DATA struct
{
    Uuid gocql.UUID    `db:"Uuid"`;
    ValueTuid string    `db:"ValueTuid"`;
    ValueUuid gocql.UUID    `db:"ValueUuid"`;
    InternalId int64    `db:"-"`;
    InternalUuid gocql.UUID    `db:"-"`;
    InternalValueId int64    `db:"-"`;
    InternalValueUuid gocql.UUID    `db:"-"`;
}

// ~~

type INTERNAL_DATA struct
{
    Id int64    `db:"Id"`;
    Uuid gocql.UUID    `db:"-"`;
    ValueTuid string    `db:"ValueTuid"`;
    ValueUuid gocql.UUID    `db:"ValueUuid"`;
    FirstName string    `db:"-"`;
    LastName string    `db:"-"`;
    IsAwesome bool    `db:"-"`;
}
