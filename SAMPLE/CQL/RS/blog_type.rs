struct SECTION
{
    uuid : String,
    number : u64,
    slug : String,
    name : String,
    text : String,
    image : String,
    image_index : u64
}

// ~~

struct USER
{
    uuid : String,
    first_name : String,
    last_name : String,
    email : String,
    pseudonym : String,
    password : String,
    phone : String,
    street : String,
    city : String,
    code : String,
    region : String,
    country : String,
    company : String,
    it_is_administrator : bool
}

// ~~

struct ARTICLE
{
    uuid : String,
    section_uuid : String,
    user_uuid : String,
    slug : String,
    title : String,
    text : String,
    image : String,
    date : String,
    section : Weak<SECTION>,
    user : Weak<USER>,
    image_index : u64
}

// ~~

struct COMMENT
{
    uuid : String,
    article_uuid : String,
    user_uuid : String,
    text : String,
    date_time : String,
    article : Weak<ARTICLE>,
    user : Weak<USER>
}

// ~~

struct SUBSCRIBER
{
    uuid : String,
    name : String,
    email : String
}
