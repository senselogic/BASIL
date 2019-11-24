func AddDatabaseSECTION(
    section * SECTION,
    error_code * ERROR_CODE
    ) bool
{
    statement, error_
        := DatabaseSession.Prepare(
               "insert into SECTION ( Number, Name, Text, Image ) values ( ?, ?, ?, ? )"
               );

    if ( error_ != nil )
    {
        error_code.SetError( error_, http.StatusBadRequest );

        return false;
    }

    result, error_
        := statement.Exec(
               section.Number,
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

func SetDatabaseSECTION(
    section * SECTION,
    error_code * ERROR_CODE
    ) bool
{
    statement, error_
        := DatabaseSession.Prepare(
               "update SECTION set Number = ?, Name = ?, Text = ?, Image = ?,  where Id = ?"
               );

    if ( error_ != nil )
    {
        error_code.SetError( error_, http.StatusBadRequest );

        return false;
    }

    result, error_
        := statement.Exec(
               section.Number,
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

func RemoveDatabaseSECTION(
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

func GetDatabaseSECTION(
    section * SECTION,
    error_code * ERROR_CODE
    ) bool
{
    statement, error_
        := DatabaseSession.Prepare(
               "select Number, Name, Text, Image,  from SECTION where Id = ? limit 1"
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

func GetDatabaseSECTIONList(
    section_array * [] SECTION,
    error_code * ERROR_CODE
    ) bool
{
    var
        section SECTION;

    statement, error_
        := DatabaseSession.Prepare(
               "select Id, Number, Name, Text, Image from SECTION"
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

func AddDatabaseUSER(
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

func SetDatabaseUSER(
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

func RemoveDatabaseUSER(
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

func GetDatabaseUSER(
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

func GetDatabaseUSERList(
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

func AddDatabaseARTICLE(
    article * ARTICLE,
    error_code * ERROR_CODE
    ) bool
{
    statement, error_
        := DatabaseSession.Prepare(
               "insert into ARTICLE ( SectionId, UserId, Title, Text, Image, Date ) values ( ?, ?, ?, ?, ?, date( now() ) )"
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

func SetDatabaseARTICLE(
    article * ARTICLE,
    error_code * ERROR_CODE
    ) bool
{
    statement, error_
        := DatabaseSession.Prepare(
               "update ARTICLE set SectionId = ?, UserId = ?, Title = ?, Text = ?, Image = ?, Date = ?,  where Id = ?"
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

func RemoveDatabaseARTICLE(
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

func GetDatabaseARTICLE(
    article * ARTICLE,
    error_code * ERROR_CODE
    ) bool
{
    statement, error_
        := DatabaseSession.Prepare(
               "select SectionId, UserId, Title, Text, Image, Date,  from ARTICLE where Id = ? limit 1"
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

func GetDatabaseARTICLEList(
    article_array * [] ARTICLE,
    error_code * ERROR_CODE
    ) bool
{
    var
        article ARTICLE;

    statement, error_
        := DatabaseSession.Prepare(
               "select Id, SectionId, UserId, Title, Text, Image, Date from ARTICLE"
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

func AddDatabaseCOMMENT(
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

func SetDatabaseCOMMENT(
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

func RemoveDatabaseCOMMENT(
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

func GetDatabaseCOMMENT(
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

func GetDatabaseCOMMENTList(
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

func AddDatabaseSUBSCRIBER(
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

func SetDatabaseSUBSCRIBER(
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

func RemoveDatabaseSUBSCRIBER(
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

func GetDatabaseSUBSCRIBER(
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

func GetDatabaseSUBSCRIBERList(
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
