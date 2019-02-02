func WriteJsonSection(
    response_writer http.ResponseWriter,
    section * SECTION
    )
{
    WriteJsonText( response_writer, "{" );
    WriteJsonText( response_writer, "\"Uuid\":" );
    WriteJsonUuid( response_writer, section.Uuid );
    WriteJsonText( response_writer, "\"Number\":" );
    WriteJsonUint64( response_writer, section.Number );
    WriteJsonText( response_writer, "\"Name\":" );
    WriteJsonString( response_writer, section.Name );
    WriteJsonText( response_writer, "\"Text\":" );
    WriteJsonString( response_writer, section.Text );
    WriteJsonText( response_writer, "\"Image\":" );
    WriteJsonString( response_writer, section.Image );
    WriteJsonText( response_writer, "}" );
}

// ~~

func WriteJsonUser(
    response_writer http.ResponseWriter,
    user * USER
    )
{
    WriteJsonText( response_writer, "{" );
    WriteJsonText( response_writer, "\"Uuid\":" );
    WriteJsonUuid( response_writer, user.Uuid );
    WriteJsonText( response_writer, "\"FirstName\":" );
    WriteJsonString( response_writer, user.FirstName );
    WriteJsonText( response_writer, "\"LastName\":" );
    WriteJsonString( response_writer, user.LastName );
    WriteJsonText( response_writer, "\"Email\":" );
    WriteJsonString( response_writer, user.Email );
    WriteJsonText( response_writer, "\"Pseudonym\":" );
    WriteJsonString( response_writer, user.Pseudonym );
    WriteJsonText( response_writer, "\"Password\":" );
    WriteJsonString( response_writer, user.Password );
    WriteJsonText( response_writer, "\"Phone\":" );
    WriteJsonString( response_writer, user.Phone );
    WriteJsonText( response_writer, "\"Street\":" );
    WriteJsonString( response_writer, user.Street );
    WriteJsonText( response_writer, "\"City\":" );
    WriteJsonString( response_writer, user.City );
    WriteJsonText( response_writer, "\"Code\":" );
    WriteJsonString( response_writer, user.Code );
    WriteJsonText( response_writer, "\"Region\":" );
    WriteJsonString( response_writer, user.Region );
    WriteJsonText( response_writer, "\"Country\":" );
    WriteJsonString( response_writer, user.Country );
    WriteJsonText( response_writer, "\"Company\":" );
    WriteJsonString( response_writer, user.Company );
    WriteJsonText( response_writer, "\"ItIsAdministrator\":" );
    WriteJsonBool( response_writer, user.ItIsAdministrator );
    WriteJsonText( response_writer, "}" );
}

// ~~

func WriteJsonArticle(
    response_writer http.ResponseWriter,
    article * ARTICLE
    )
{
    WriteJsonText( response_writer, "{" );
    WriteJsonText( response_writer, "\"Uuid\":" );
    WriteJsonUuid( response_writer, article.Uuid );
    WriteJsonText( response_writer, "\"SectionUuid\":" );
    WriteJsonUuid( response_writer, article.SectionUuid );
    WriteJsonText( response_writer, "\"UserUuid\":" );
    WriteJsonUuid( response_writer, article.UserUuid );
    WriteJsonText( response_writer, "\"Title\":" );
    WriteJsonString( response_writer, article.Title );
    WriteJsonText( response_writer, "\"Text\":" );
    WriteJsonString( response_writer, article.Text );
    WriteJsonText( response_writer, "\"Image\":" );
    WriteJsonString( response_writer, article.Image );
    WriteJsonText( response_writer, "\"Date\":" );
    WriteJsonString( response_writer, article.Date );
    WriteJsonText( response_writer, "}" );
}

// ~~

func WriteJsonComment(
    response_writer http.ResponseWriter,
    comment * COMMENT
    )
{
    WriteJsonText( response_writer, "{" );
    WriteJsonText( response_writer, "\"Uuid\":" );
    WriteJsonUuid( response_writer, comment.Uuid );
    WriteJsonText( response_writer, "\"ArticleUuid\":" );
    WriteJsonUuid( response_writer, comment.ArticleUuid );
    WriteJsonText( response_writer, "\"UserUuid\":" );
    WriteJsonUuid( response_writer, comment.UserUuid );
    WriteJsonText( response_writer, "\"Text\":" );
    WriteJsonString( response_writer, comment.Text );
    WriteJsonText( response_writer, "\"DateTime\":" );
    WriteJsonString( response_writer, comment.DateTime );
    WriteJsonText( response_writer, "}" );
}

// ~~

func WriteJsonSubscriber(
    response_writer http.ResponseWriter,
    subscriber * SUBSCRIBER
    )
{
    WriteJsonText( response_writer, "{" );
    WriteJsonText( response_writer, "\"Uuid\":" );
    WriteJsonUuid( response_writer, subscriber.Uuid );
    WriteJsonText( response_writer, "\"Name\":" );
    WriteJsonString( response_writer, subscriber.Name );
    WriteJsonText( response_writer, "\"Email\":" );
    WriteJsonString( response_writer, subscriber.Email );
    WriteJsonText( response_writer, "}" );
}