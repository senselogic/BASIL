func AddDatabaseSection(
    section * SECTION,
    error_code * ERROR_CODE
    ) bool
{
    statement, error_
        := DatabaseSession.Prepare(
               "insert into SECTION ( Number, Slug, Name, Text, Image ) values ( ?, ?, ?, ?, ? )"
               );

    if ( error_ != nil )
    {
        error_code.SetError( error_, http.StatusBadRequest );

        return false;
    }

    result, error_
        := statement.Exec(
               section.Number,
               section.Slug,
               section.Name,
               section.Text,
               section.Image
               );

    if ( error_ != nil )
    {
        error_code.SetError( error_, http.StatusBadRequest );

        return false;
    }

    section.Id, error_ = result.LastInsertId();

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
    int number,
    string slug,
    string name,
    string text,
    string image
    )
{
    var statement = GetDatabaseStatement( 'replace into SECTION ( Number, Slug, Name, Text, Image ) values ( ?, ?, ?, ?, ? )' );
    statement.bindParam( 1, number, PDO::PARAM_INT );
    statement.bindParam( 2, slug, PDO::PARAM_STR );
    statement.bindParam( 3, name, PDO::PARAM_STR );
    statement.bindParam( 4, text, PDO::PARAM_STR );
    statement.bindParam( 5, image, PDO::PARAM_STR );

    if ( !statement.execute() )
    {
        var_dump( statement.errorInfo() );
    }

    return GetDatabaseAddedId( statement );
}

// ~~

func SetDatabaseSection(
    section * SECTION,
    error_code * ERROR_CODE
    ) bool
{
    statement, error_
        := DatabaseSession.Prepare(
               "update SECTION set Number = ?, Slug = ?, Name = ?, Text = ?, Image = ?,  where Id = ?"
               );

    if ( error_ != nil )
    {
        error_code.SetError( error_, http.StatusBadRequest );

        return false;
    }

    result, error_
        := statement.Exec(
               section.Number,
               section.Slug,
               section.Name,
               section.Text,
               section.Image,
               section.Id
               );

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
    statement, error_
        := DatabaseSession.Prepare(
               "delete from SECTION where Id = ?"
               );

    if ( error_ != nil )
    {
        error_code.SetError( error_, http.StatusBadRequest );

        return false;
    }

    result, error_
        := statement.Exec(
               section.Id
               );

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
    statement, error_
        := DatabaseSession.Prepare(
               "select Number, Slug, Name, Text, Image,  from SECTION where Id = ? limit 1"
               );

    if ( error_ != nil )
    {
        error_code.SetError( error_, http.StatusBadRequest );

        return false;
    }

    rows, error_
        := statement.Query(
               section.Id
               );

    if ( error_ != nil )
    {
        error_code.SetError( error_, http.StatusBadRequest );

        return false;
    }

    for rows.Next()
    {
        error_
            = rows.Scan(                  &section.Number,
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
    }

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

    statement, error_
        := DatabaseSession.Prepare(
               "select Id, Number, Slug, Name, Text, Image from SECTION"
               );

    if ( error_ != nil )
    {
        error_code.SetError( error_, http.StatusBadRequest );

        return false;
    }

    rows, error_ := statement.Query();

    if ( error_ != nil )
    {
        error_code.SetError( error_, http.StatusBadRequest );

        return false;
    }

    *section_array = make( [] SECTION, 0 );

    for rows.Next()
    {
        error_
            = rows.Scan(
                  &section.Id,
                  &section.Number,
                  &section.Slug,
                  &section.Name,
                  &section.Text,
                  &section.Image
                  );

        if ( error_ != nil )
        {
            error_code.SetError( error_, http.StatusBadRequest );

            return false;
        }

        *section_array = append( *section_array, section );
    }

    return true;
}

// ~~

func AddDatabaseUser(
    user * USER,
    error_code * ERROR_CODE
    ) bool
{
    statement, error_
        := DatabaseSession.Prepare(
               "insert into USER ( FirstName, LastName, Email, Pseudonym, Password, Phone, Street, City, Code, Region, Country, Company, ItIsAdministrator ) values ( ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ? )"
               );

    if ( error_ != nil )
    {
        error_code.SetError( error_, http.StatusBadRequest );

        return false;
    }

    result, error_
        := statement.Exec(
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
               );

    if ( error_ != nil )
    {
        error_code.SetError( error_, http.StatusBadRequest );

        return false;
    }

    user.Id, error_ = result.LastInsertId();

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
    var statement = GetDatabaseStatement( 'replace into USER ( FirstName, LastName, Email, Pseudonym, Password, Phone, Street, City, Code, Region, Country, Company, ItIsAdministrator ) values ( ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ? )' );
    statement.bindParam( 1, first_name, PDO::PARAM_STR );
    statement.bindParam( 2, last_name, PDO::PARAM_STR );
    statement.bindParam( 3, email, PDO::PARAM_STR );
    statement.bindParam( 4, pseudonym, PDO::PARAM_STR );
    statement.bindParam( 5, password, PDO::PARAM_STR );
    statement.bindParam( 6, phone, PDO::PARAM_STR );
    statement.bindParam( 7, street, PDO::PARAM_STR );
    statement.bindParam( 8, city, PDO::PARAM_STR );
    statement.bindParam( 9, code, PDO::PARAM_STR );
    statement.bindParam( 10, region, PDO::PARAM_STR );
    statement.bindParam( 11, country, PDO::PARAM_STR );
    statement.bindParam( 12, company, PDO::PARAM_STR );
    statement.bindParam( 13, it_is_administrator, PDO::PARAM_BOOL );

    if ( !statement.execute() )
    {
        var_dump( statement.errorInfo() );
    }

    return GetDatabaseAddedId( statement );
}

// ~~

func SetDatabaseUser(
    user * USER,
    error_code * ERROR_CODE
    ) bool
{
    statement, error_
        := DatabaseSession.Prepare(
               "update USER set FirstName = ?, LastName = ?, Email = ?, Pseudonym = ?, Password = ?, Phone = ?, Street = ?, City = ?, Code = ?, Region = ?, Country = ?, Company = ?, ItIsAdministrator = ? where Id = ?"
               );

    if ( error_ != nil )
    {
        error_code.SetError( error_, http.StatusBadRequest );

        return false;
    }

    result, error_
        := statement.Exec(
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
               user.ItIsAdministrator,
               user.Id
               );

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
    statement, error_
        := DatabaseSession.Prepare(
               "delete from USER where Id = ?"
               );

    if ( error_ != nil )
    {
        error_code.SetError( error_, http.StatusBadRequest );

        return false;
    }

    result, error_
        := statement.Exec(
               user.Id
               );

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
    statement, error_
        := DatabaseSession.Prepare(
               "select FirstName, LastName, Email, Pseudonym, Password, Phone, Street, City, Code, Region, Country, Company, ItIsAdministrator from USER where Id = ? limit 1"
               );

    if ( error_ != nil )
    {
        error_code.SetError( error_, http.StatusBadRequest );

        return false;
    }

    rows, error_
        := statement.Query(
               user.Id
               );

    if ( error_ != nil )
    {
        error_code.SetError( error_, http.StatusBadRequest );

        return false;
    }

    for rows.Next()
    {
        error_
            = rows.Scan(                  &user.FirstName,
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
    }

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

    statement, error_
        := DatabaseSession.Prepare(
               "select Id, FirstName, LastName, Email, Pseudonym, Password, Phone, Street, City, Code, Region, Country, Company, ItIsAdministrator from USER"
               );

    if ( error_ != nil )
    {
        error_code.SetError( error_, http.StatusBadRequest );

        return false;
    }

    rows, error_ := statement.Query();

    if ( error_ != nil )
    {
        error_code.SetError( error_, http.StatusBadRequest );

        return false;
    }

    *user_array = make( [] USER, 0 );

    for rows.Next()
    {
        error_
            = rows.Scan(
                  &user.Id,
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

        *user_array = append( *user_array, user );
    }

    return true;
}

// ~~

func AddDatabaseArticle(
    article * ARTICLE,
    error_code * ERROR_CODE
    ) bool
{
    statement, error_
        := DatabaseSession.Prepare(
               "insert into ARTICLE ( SectionId, UserId, Slug, Title, Text, Image, Date ) values ( ?, ?, ?, ?, ?, ?, date( now() ) )"
               );

    if ( error_ != nil )
    {
        error_code.SetError( error_, http.StatusBadRequest );

        return false;
    }

    result, error_
        := statement.Exec(
               article.SectionId,
               article.UserId,
               article.Slug,
               article.Title,
               article.Text,
               article.Image
               );

    if ( error_ != nil )
    {
        error_code.SetError( error_, http.StatusBadRequest );

        return false;
    }

    article.Id, error_ = result.LastInsertId();

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
    int section_id,
    int user_id,
    string slug,
    string title,
    string text,
    string image
    )
{
    var statement = GetDatabaseStatement( 'replace into ARTICLE ( SectionId, UserId, Slug, Title, Text, Image, Date ) values ( ?, ?, ?, ?, ?, ?, date( now() ) )' );
    statement.bindParam( 1, section_id, PDO::PARAM_INT );
    statement.bindParam( 2, user_id, PDO::PARAM_INT );
    statement.bindParam( 3, slug, PDO::PARAM_STR );
    statement.bindParam( 4, title, PDO::PARAM_STR );
    statement.bindParam( 5, text, PDO::PARAM_STR );
    statement.bindParam( 6, image, PDO::PARAM_STR );

    if ( !statement.execute() )
    {
        var_dump( statement.errorInfo() );
    }

    return GetDatabaseAddedId( statement );
}

// ~~

func SetDatabaseArticle(
    article * ARTICLE,
    error_code * ERROR_CODE
    ) bool
{
    statement, error_
        := DatabaseSession.Prepare(
               "update ARTICLE set SectionId = ?, UserId = ?, Slug = ?, Title = ?, Text = ?, Image = ?, Date = ?,  where Id = ?"
               );

    if ( error_ != nil )
    {
        error_code.SetError( error_, http.StatusBadRequest );

        return false;
    }

    result, error_
        := statement.Exec(
               article.SectionId,
               article.UserId,
               article.Slug,
               article.Title,
               article.Text,
               article.Image,
               article.Date,
               article.Id
               );

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
    statement, error_
        := DatabaseSession.Prepare(
               "delete from ARTICLE where Id = ?"
               );

    if ( error_ != nil )
    {
        error_code.SetError( error_, http.StatusBadRequest );

        return false;
    }

    result, error_
        := statement.Exec(
               article.Id
               );

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
    statement, error_
        := DatabaseSession.Prepare(
               "select SectionId, UserId, Slug, Title, Text, Image, Date,  from ARTICLE where Id = ? limit 1"
               );

    if ( error_ != nil )
    {
        error_code.SetError( error_, http.StatusBadRequest );

        return false;
    }

    rows, error_
        := statement.Query(
               article.Id
               );

    if ( error_ != nil )
    {
        error_code.SetError( error_, http.StatusBadRequest );

        return false;
    }

    for rows.Next()
    {
        error_
            = rows.Scan(                  &article.SectionId,
                  &article.UserId,
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
    }

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

    statement, error_
        := DatabaseSession.Prepare(
               "select Id, SectionId, UserId, Slug, Title, Text, Image, Date from ARTICLE"
               );

    if ( error_ != nil )
    {
        error_code.SetError( error_, http.StatusBadRequest );

        return false;
    }

    rows, error_ := statement.Query();

    if ( error_ != nil )
    {
        error_code.SetError( error_, http.StatusBadRequest );

        return false;
    }

    *article_array = make( [] ARTICLE, 0 );

    for rows.Next()
    {
        error_
            = rows.Scan(
                  &article.Id,
                  &article.SectionId,
                  &article.UserId,
                  &article.Slug,
                  &article.Title,
                  &article.Text,
                  &article.Image,
                  &article.Date
                  );

        if ( error_ != nil )
        {
            error_code.SetError( error_, http.StatusBadRequest );

            return false;
        }

        *article_array = append( *article_array, article );
    }

    return true;
}

// ~~

func AddDatabaseComment(
    comment * COMMENT,
    error_code * ERROR_CODE
    ) bool
{
    statement, error_
        := DatabaseSession.Prepare(
               "insert into COMMENT ( ArticleId, UserId, Text, DateTime ) values ( ?, ?, ?, now() )"
               );

    if ( error_ != nil )
    {
        error_code.SetError( error_, http.StatusBadRequest );

        return false;
    }

    result, error_
        := statement.Exec(
               comment.ArticleId,
               comment.UserId,
               comment.Text
               );

    if ( error_ != nil )
    {
        error_code.SetError( error_, http.StatusBadRequest );

        return false;
    }

    comment.Id, error_ = result.LastInsertId();

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
    int article_id,
    int user_id,
    string text
    )
{
    var statement = GetDatabaseStatement( 'replace into COMMENT ( ArticleId, UserId, Text, DateTime ) values ( ?, ?, ?, now() )' );
    statement.bindParam( 1, article_id, PDO::PARAM_INT );
    statement.bindParam( 2, user_id, PDO::PARAM_INT );
    statement.bindParam( 3, text, PDO::PARAM_STR );

    if ( !statement.execute() )
    {
        var_dump( statement.errorInfo() );
    }

    return GetDatabaseAddedId( statement );
}

// ~~

func SetDatabaseComment(
    comment * COMMENT,
    error_code * ERROR_CODE
    ) bool
{
    statement, error_
        := DatabaseSession.Prepare(
               "update COMMENT set ArticleId = ?, UserId = ?, Text = ?, DateTime = ?,  where Id = ?"
               );

    if ( error_ != nil )
    {
        error_code.SetError( error_, http.StatusBadRequest );

        return false;
    }

    result, error_
        := statement.Exec(
               comment.ArticleId,
               comment.UserId,
               comment.Text,
               comment.DateTime,
               comment.Id
               );

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
    statement, error_
        := DatabaseSession.Prepare(
               "delete from COMMENT where Id = ?"
               );

    if ( error_ != nil )
    {
        error_code.SetError( error_, http.StatusBadRequest );

        return false;
    }

    result, error_
        := statement.Exec(
               comment.Id
               );

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
    statement, error_
        := DatabaseSession.Prepare(
               "select ArticleId, UserId, Text, DateTime,  from COMMENT where Id = ? limit 1"
               );

    if ( error_ != nil )
    {
        error_code.SetError( error_, http.StatusBadRequest );

        return false;
    }

    rows, error_
        := statement.Query(
               comment.Id
               );

    if ( error_ != nil )
    {
        error_code.SetError( error_, http.StatusBadRequest );

        return false;
    }

    for rows.Next()
    {
        error_
            = rows.Scan(                  &comment.ArticleId,
                  &comment.UserId,
                  &comment.Text,
                  &comment.DateTime,

                  );

        if ( error_ != nil )
        {
            error_code.SetError( error_, http.StatusBadRequest );

            return false;
        }
    }

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

    statement, error_
        := DatabaseSession.Prepare(
               "select Id, ArticleId, UserId, Text, DateTime from COMMENT"
               );

    if ( error_ != nil )
    {
        error_code.SetError( error_, http.StatusBadRequest );

        return false;
    }

    rows, error_ := statement.Query();

    if ( error_ != nil )
    {
        error_code.SetError( error_, http.StatusBadRequest );

        return false;
    }

    *comment_array = make( [] COMMENT, 0 );

    for rows.Next()
    {
        error_
            = rows.Scan(
                  &comment.Id,
                  &comment.ArticleId,
                  &comment.UserId,
                  &comment.Text,
                  &comment.DateTime
                  );

        if ( error_ != nil )
        {
            error_code.SetError( error_, http.StatusBadRequest );

            return false;
        }

        *comment_array = append( *comment_array, comment );
    }

    return true;
}

// ~~

func AddDatabaseSubscriber(
    subscriber * SUBSCRIBER,
    error_code * ERROR_CODE
    ) bool
{
    statement, error_
        := DatabaseSession.Prepare(
               "insert into SUBSCRIBER ( Name, Email ) values ( ?, ? )"
               );

    if ( error_ != nil )
    {
        error_code.SetError( error_, http.StatusBadRequest );

        return false;
    }

    result, error_
        := statement.Exec(
               subscriber.Name,
               subscriber.Email
               );

    if ( error_ != nil )
    {
        error_code.SetError( error_, http.StatusBadRequest );

        return false;
    }

    subscriber.Id, error_ = result.LastInsertId();

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
    string name,
    string email
    )
{
    var statement = GetDatabaseStatement( 'replace into SUBSCRIBER ( Name, Email ) values ( ?, ? )' );
    statement.bindParam( 1, name, PDO::PARAM_STR );
    statement.bindParam( 2, email, PDO::PARAM_STR );

    if ( !statement.execute() )
    {
        var_dump( statement.errorInfo() );
    }

    return GetDatabaseAddedId( statement );
}

// ~~

func SetDatabaseSubscriber(
    subscriber * SUBSCRIBER,
    error_code * ERROR_CODE
    ) bool
{
    statement, error_
        := DatabaseSession.Prepare(
               "update SUBSCRIBER set Name = ?, Email = ? where Id = ?"
               );

    if ( error_ != nil )
    {
        error_code.SetError( error_, http.StatusBadRequest );

        return false;
    }

    result, error_
        := statement.Exec(
               subscriber.Name,
               subscriber.Email,
               subscriber.Id
               );

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
    statement, error_
        := DatabaseSession.Prepare(
               "delete from SUBSCRIBER where Id = ?"
               );

    if ( error_ != nil )
    {
        error_code.SetError( error_, http.StatusBadRequest );

        return false;
    }

    result, error_
        := statement.Exec(
               subscriber.Id
               );

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
    statement, error_
        := DatabaseSession.Prepare(
               "select Name, Email from SUBSCRIBER where Id = ? limit 1"
               );

    if ( error_ != nil )
    {
        error_code.SetError( error_, http.StatusBadRequest );

        return false;
    }

    rows, error_
        := statement.Query(
               subscriber.Id
               );

    if ( error_ != nil )
    {
        error_code.SetError( error_, http.StatusBadRequest );

        return false;
    }

    for rows.Next()
    {
        error_
            = rows.Scan(                  &subscriber.Name,
                  &subscriber.Email

                  );

        if ( error_ != nil )
        {
            error_code.SetError( error_, http.StatusBadRequest );

            return false;
        }
    }

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

    statement, error_
        := DatabaseSession.Prepare(
               "select Id, Name, Email from SUBSCRIBER"
               );

    if ( error_ != nil )
    {
        error_code.SetError( error_, http.StatusBadRequest );

        return false;
    }

    rows, error_ := statement.Query();

    if ( error_ != nil )
    {
        error_code.SetError( error_, http.StatusBadRequest );

        return false;
    }

    *subscriber_array = make( [] SUBSCRIBER, 0 );

    for rows.Next()
    {
        error_
            = rows.Scan(
                  &subscriber.Id,
                  &subscriber.Name,
                  &subscriber.Email
                  );

        if ( error_ != nil )
        {
            error_code.SetError( error_, http.StatusBadRequest );

            return false;
        }

        *subscriber_array = append( *subscriber_array, subscriber );
    }

    return true;
}
