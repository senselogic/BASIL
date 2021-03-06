func AddDatabaseSection(
    section * SECTION,
    error_code * ERROR_CODE
    ) bool
{
    section.Uuid = gocql.TimeUUID();

    error_
        := DatabaseSession.Query(
               "insert into SECTION ( Uuid, Number, Slug, Name, Text, Image ) values ( ?, ?, ?, ?, ?, ? )",
               section.Uuid,
               section.Number,
               section.Slug,
               section.Name,
               section.Text,
               section.Image
               ).Exec();

    if ( error_ != nil )
    {
        error_code.SetError( error_, http.StatusBadRequest );

        return false;
    }

    return true;
}

// ~~


// ~~

function AddDatabaseSection(
    string uuid,
    int number,
    string slug,
    string name,
    string text,
    string image
    )
{
}

// ~~

func SetDatabaseSection(
    section * SECTION,
    error_code * ERROR_CODE
    ) bool
{
    error_
        := DatabaseSession.Query(
               "insert into SECTION ( Uuid, Number, Slug, Name, Text, Image ) values ( ?, ?, ?, ?, ?, ? )",
               section.Uuid,
               section.Number,
               section.Slug,
               section.Name,
               section.Text,
               section.Image
               ).Exec();

    if ( error_ != nil )
    {
        error_code.SetError( error_, http.StatusBadRequest );

        return false;
    }

    return true;
}

// ~~

func RemoveDatabaseSection(
    section * SECTION,
    error_code * ERROR_CODE
    ) bool
{
    error_
        := DatabaseSession.Query(
               "delete from SECTION where Uuid = ?",
               section.Uuid
               ).Exec();

    if ( error_ != nil )
    {
        error_code.SetError( error_, http.StatusBadRequest );

        return false;
    }

    return true;
}

// ~~

func GetDatabaseSection(
    section * SECTION,
    error_code * ERROR_CODE
    ) bool
{
    error_
        := DatabaseSession.Query(
               "select Number, Slug, Name, Text, Image,  from SECTION where Uuid = ?",
               section.Uuid
               )
               .Consistency( gocql.One )
               .Scan(
                    &section.Number,
                    &section.Slug,
                    &section.Name,
                    &section.Text,
                    &section.Image,
                    );

    if ( error_ != nil )
    {
        error_code.SetError( error_, http.StatusBadRequest );

        return false;
    }

    return true;
}

// ~~

func GetDatabaseSectionList(
    section_array * [] SECTION,
    error_code * ERROR_CODE
    ) bool
{
    var
        section SECTION;

    iterator
        := DatabaseSession.Query(
               "select Uuid, Number, Slug, Name, Text, Image from SECTION"
               )
               .Consistency( gocql.One )
               .Iter();

    *section_array = make( [] SECTION, 0 );

    for iterator.Scan(
            &section.Uuid,
            &section.Number,
            &section.Slug,
            &section.Name,
            &section.Text,
            &section.Image
            )
    {
        *section_array = append( *section_array, section );
    }

    error_ := iterator.Close();

    if ( error_ != nil )
    {
        error_code.SetError( error_, http.StatusBadRequest );

        return false;
    }

    return true;
}

// ~~

func AddDatabaseUser(
    user * USER,
    error_code * ERROR_CODE
    ) bool
{
    user.Uuid = gocql.TimeUUID();

    error_
        := DatabaseSession.Query(
               "insert into USER ( Uuid, FirstName, LastName, Email, Pseudonym, Password, Phone, Street, City, Code, Region, Country, Company, ItIsAdministrator ) values ( ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ? )",
               user.Uuid,
               user.FirstName,
               user.LastName,
               user.Email,
               user.Pseudonym,
               user.Password,
               user.Phone,
               user.Street,
               user.City,
               user.Code,
               user.Region,
               user.Country,
               user.Company,
               user.ItIsAdministrator
               ).Exec();

    if ( error_ != nil )
    {
        error_code.SetError( error_, http.StatusBadRequest );

        return false;
    }

    return true;
}

// ~~


// ~~

function AddDatabaseUser(
    string uuid,
    string first_name,
    string last_name,
    string email,
    string pseudonym,
    string password,
    string phone,
    string street,
    string city,
    string code,
    string region,
    string country,
    string company,
    bool it_is_administrator
    )
{
}

// ~~

func SetDatabaseUser(
    user * USER,
    error_code * ERROR_CODE
    ) bool
{
    error_
        := DatabaseSession.Query(
               "insert into USER ( Uuid, FirstName, LastName, Email, Pseudonym, Password, Phone, Street, City, Code, Region, Country, Company, ItIsAdministrator ) values ( ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ? )",
               user.Uuid,
               user.FirstName,
               user.LastName,
               user.Email,
               user.Pseudonym,
               user.Password,
               user.Phone,
               user.Street,
               user.City,
               user.Code,
               user.Region,
               user.Country,
               user.Company,
               user.ItIsAdministrator
               ).Exec();

    if ( error_ != nil )
    {
        error_code.SetError( error_, http.StatusBadRequest );

        return false;
    }

    return true;
}

// ~~

func RemoveDatabaseUser(
    user * USER,
    error_code * ERROR_CODE
    ) bool
{
    error_
        := DatabaseSession.Query(
               "delete from USER where Uuid = ?",
               user.Uuid
               ).Exec();

    if ( error_ != nil )
    {
        error_code.SetError( error_, http.StatusBadRequest );

        return false;
    }

    return true;
}

// ~~

func GetDatabaseUser(
    user * USER,
    error_code * ERROR_CODE
    ) bool
{
    error_
        := DatabaseSession.Query(
               "select FirstName, LastName, Email, Pseudonym, Password, Phone, Street, City, Code, Region, Country, Company, ItIsAdministrator from USER where Uuid = ?",
               user.Uuid
               )
               .Consistency( gocql.One )
               .Scan(
                    &user.FirstName,
                    &user.LastName,
                    &user.Email,
                    &user.Pseudonym,
                    &user.Password,
                    &user.Phone,
                    &user.Street,
                    &user.City,
                    &user.Code,
                    &user.Region,
                    &user.Country,
                    &user.Company,
                    &user.ItIsAdministrator
                    );

    if ( error_ != nil )
    {
        error_code.SetError( error_, http.StatusBadRequest );

        return false;
    }

    return true;
}

// ~~

func GetDatabaseUserList(
    user_array * [] USER,
    error_code * ERROR_CODE
    ) bool
{
    var
        user USER;

    iterator
        := DatabaseSession.Query(
               "select Uuid, FirstName, LastName, Email, Pseudonym, Password, Phone, Street, City, Code, Region, Country, Company, ItIsAdministrator from USER"
               )
               .Consistency( gocql.One )
               .Iter();

    *user_array = make( [] USER, 0 );

    for iterator.Scan(
            &user.Uuid,
            &user.FirstName,
            &user.LastName,
            &user.Email,
            &user.Pseudonym,
            &user.Password,
            &user.Phone,
            &user.Street,
            &user.City,
            &user.Code,
            &user.Region,
            &user.Country,
            &user.Company,
            &user.ItIsAdministrator
            )
    {
        *user_array = append( *user_array, user );
    }

    error_ := iterator.Close();

    if ( error_ != nil )
    {
        error_code.SetError( error_, http.StatusBadRequest );

        return false;
    }

    return true;
}

// ~~

func AddDatabaseArticle(
    article * ARTICLE,
    error_code * ERROR_CODE
    ) bool
{
    article.Uuid = gocql.TimeUUID();

    error_
        := DatabaseSession.Query(
               "insert into ARTICLE ( Uuid, SectionUuid, UserUuid, Slug, Title, Text, Image, Date ) values ( ?, ?, ?, ?, ?, ?, ?, ? )",
               article.Uuid,
               article.SectionUuid,
               article.UserUuid,
               article.Slug,
               article.Title,
               article.Text,
               article.Image,
               article.Date
               ).Exec();

    if ( error_ != nil )
    {
        error_code.SetError( error_, http.StatusBadRequest );

        return false;
    }

    return true;
}

// ~~


// ~~

function AddDatabaseArticle(
    string uuid,
    string section_uuid,
    string user_uuid,
    string slug,
    string title,
    string text,
    string image,
    string date
    )
{
}

// ~~

func SetDatabaseArticle(
    article * ARTICLE,
    error_code * ERROR_CODE
    ) bool
{
    error_
        := DatabaseSession.Query(
               "insert into ARTICLE ( Uuid, SectionUuid, UserUuid, Slug, Title, Text, Image, Date ) values ( ?, ?, ?, ?, ?, ?, ?, ? )",
               article.Uuid,
               article.SectionUuid,
               article.UserUuid,
               article.Slug,
               article.Title,
               article.Text,
               article.Image,
               article.Date
               ).Exec();

    if ( error_ != nil )
    {
        error_code.SetError( error_, http.StatusBadRequest );

        return false;
    }

    return true;
}

// ~~

func RemoveDatabaseArticle(
    article * ARTICLE,
    error_code * ERROR_CODE
    ) bool
{
    error_
        := DatabaseSession.Query(
               "delete from ARTICLE where Uuid = ?",
               article.Uuid
               ).Exec();

    if ( error_ != nil )
    {
        error_code.SetError( error_, http.StatusBadRequest );

        return false;
    }

    return true;
}

// ~~

func GetDatabaseArticle(
    article * ARTICLE,
    error_code * ERROR_CODE
    ) bool
{
    error_
        := DatabaseSession.Query(
               "select SectionUuid, UserUuid, Slug, Title, Text, Image, Date,  from ARTICLE where Uuid = ?",
               article.Uuid
               )
               .Consistency( gocql.One )
               .Scan(
                    &article.SectionUuid,
                    &article.UserUuid,
                    &article.Slug,
                    &article.Title,
                    &article.Text,
                    &article.Image,
                    &article.Date,
                    );

    if ( error_ != nil )
    {
        error_code.SetError( error_, http.StatusBadRequest );

        return false;
    }

    return true;
}

// ~~

func GetDatabaseArticleList(
    article_array * [] ARTICLE,
    error_code * ERROR_CODE
    ) bool
{
    var
        article ARTICLE;

    iterator
        := DatabaseSession.Query(
               "select Uuid, SectionUuid, UserUuid, Slug, Title, Text, Image, Date from ARTICLE"
               )
               .Consistency( gocql.One )
               .Iter();

    *article_array = make( [] ARTICLE, 0 );

    for iterator.Scan(
            &article.Uuid,
            &article.SectionUuid,
            &article.UserUuid,
            &article.Slug,
            &article.Title,
            &article.Text,
            &article.Image,
            &article.Date
            )
    {
        *article_array = append( *article_array, article );
    }

    error_ := iterator.Close();

    if ( error_ != nil )
    {
        error_code.SetError( error_, http.StatusBadRequest );

        return false;
    }

    return true;
}

// ~~

func AddDatabaseComment(
    comment * COMMENT,
    error_code * ERROR_CODE
    ) bool
{
    comment.Uuid = gocql.TimeUUID();

    error_
        := DatabaseSession.Query(
               "insert into COMMENT ( Uuid, ArticleUuid, UserUuid, Text, DateTime ) values ( ?, ?, ?, ?, ? )",
               comment.Uuid,
               comment.ArticleUuid,
               comment.UserUuid,
               comment.Text,
               comment.DateTime
               ).Exec();

    if ( error_ != nil )
    {
        error_code.SetError( error_, http.StatusBadRequest );

        return false;
    }

    return true;
}

// ~~


// ~~

function AddDatabaseComment(
    string uuid,
    string article_uuid,
    string user_uuid,
    string text,
    string date_time
    )
{
}

// ~~

func SetDatabaseComment(
    comment * COMMENT,
    error_code * ERROR_CODE
    ) bool
{
    error_
        := DatabaseSession.Query(
               "insert into COMMENT ( Uuid, ArticleUuid, UserUuid, Text, DateTime ) values ( ?, ?, ?, ?, ? )",
               comment.Uuid,
               comment.ArticleUuid,
               comment.UserUuid,
               comment.Text,
               comment.DateTime
               ).Exec();

    if ( error_ != nil )
    {
        error_code.SetError( error_, http.StatusBadRequest );

        return false;
    }

    return true;
}

// ~~

func RemoveDatabaseComment(
    comment * COMMENT,
    error_code * ERROR_CODE
    ) bool
{
    error_
        := DatabaseSession.Query(
               "delete from COMMENT where Uuid = ?",
               comment.Uuid
               ).Exec();

    if ( error_ != nil )
    {
        error_code.SetError( error_, http.StatusBadRequest );

        return false;
    }

    return true;
}

// ~~

func GetDatabaseComment(
    comment * COMMENT,
    error_code * ERROR_CODE
    ) bool
{
    error_
        := DatabaseSession.Query(
               "select ArticleUuid, UserUuid, Text, DateTime,  from COMMENT where Uuid = ?",
               comment.Uuid
               )
               .Consistency( gocql.One )
               .Scan(
                    &comment.ArticleUuid,
                    &comment.UserUuid,
                    &comment.Text,
                    &comment.DateTime,
                    );

    if ( error_ != nil )
    {
        error_code.SetError( error_, http.StatusBadRequest );

        return false;
    }

    return true;
}

// ~~

func GetDatabaseCommentList(
    comment_array * [] COMMENT,
    error_code * ERROR_CODE
    ) bool
{
    var
        comment COMMENT;

    iterator
        := DatabaseSession.Query(
               "select Uuid, ArticleUuid, UserUuid, Text, DateTime from COMMENT"
               )
               .Consistency( gocql.One )
               .Iter();

    *comment_array = make( [] COMMENT, 0 );

    for iterator.Scan(
            &comment.Uuid,
            &comment.ArticleUuid,
            &comment.UserUuid,
            &comment.Text,
            &comment.DateTime
            )
    {
        *comment_array = append( *comment_array, comment );
    }

    error_ := iterator.Close();

    if ( error_ != nil )
    {
        error_code.SetError( error_, http.StatusBadRequest );

        return false;
    }

    return true;
}

// ~~

func AddDatabaseSubscriber(
    subscriber * SUBSCRIBER,
    error_code * ERROR_CODE
    ) bool
{
    subscriber.Uuid = gocql.TimeUUID();

    error_
        := DatabaseSession.Query(
               "insert into SUBSCRIBER ( Uuid, Name, Email ) values ( ?, ?, ? )",
               subscriber.Uuid,
               subscriber.Name,
               subscriber.Email
               ).Exec();

    if ( error_ != nil )
    {
        error_code.SetError( error_, http.StatusBadRequest );

        return false;
    }

    return true;
}

// ~~


// ~~

function AddDatabaseSubscriber(
    string uuid,
    string name,
    string email
    )
{
}

// ~~

func SetDatabaseSubscriber(
    subscriber * SUBSCRIBER,
    error_code * ERROR_CODE
    ) bool
{
    error_
        := DatabaseSession.Query(
               "insert into SUBSCRIBER ( Uuid, Name, Email ) values ( ?, ?, ? )",
               subscriber.Uuid,
               subscriber.Name,
               subscriber.Email
               ).Exec();

    if ( error_ != nil )
    {
        error_code.SetError( error_, http.StatusBadRequest );

        return false;
    }

    return true;
}

// ~~

func RemoveDatabaseSubscriber(
    subscriber * SUBSCRIBER,
    error_code * ERROR_CODE
    ) bool
{
    error_
        := DatabaseSession.Query(
               "delete from SUBSCRIBER where Uuid = ?",
               subscriber.Uuid
               ).Exec();

    if ( error_ != nil )
    {
        error_code.SetError( error_, http.StatusBadRequest );

        return false;
    }

    return true;
}

// ~~

func GetDatabaseSubscriber(
    subscriber * SUBSCRIBER,
    error_code * ERROR_CODE
    ) bool
{
    error_
        := DatabaseSession.Query(
               "select Name, Email from SUBSCRIBER where Uuid = ?",
               subscriber.Uuid
               )
               .Consistency( gocql.One )
               .Scan(
                    &subscriber.Name,
                    &subscriber.Email
                    );

    if ( error_ != nil )
    {
        error_code.SetError( error_, http.StatusBadRequest );

        return false;
    }

    return true;
}

// ~~

func GetDatabaseSubscriberList(
    subscriber_array * [] SUBSCRIBER,
    error_code * ERROR_CODE
    ) bool
{
    var
        subscriber SUBSCRIBER;

    iterator
        := DatabaseSession.Query(
               "select Uuid, Name, Email from SUBSCRIBER"
               )
               .Consistency( gocql.One )
               .Iter();

    *subscriber_array = make( [] SUBSCRIBER, 0 );

    for iterator.Scan(
            &subscriber.Uuid,
            &subscriber.Name,
            &subscriber.Email
            )
    {
        *subscriber_array = append( *subscriber_array, subscriber );
    }

    error_ := iterator.Close();

    if ( error_ != nil )
    {
        error_code.SetError( error_, http.StatusBadRequest );

        return false;
    }

    return true;
}
