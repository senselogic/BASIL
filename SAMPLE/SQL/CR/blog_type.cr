class SECTION
    @id : Uint64
    @number : Uint64
    @slug : String
    @name : String
    @text : String
    @image : String
    @image_index : Uint64
end

# ~~

class USER
    @id : Uint64
    @first_name : String
    @last_name : String
    @email : String
    @pseudonym : String
    @password : String
    @phone : String
    @street : String
    @city : String
    @code : String
    @region : String
    @country : String
    @company : String
    @it_is_administrator : bool
end

# ~~

class ARTICLE
    @id : Uint64
    @section_id : Uint64
    @user_id : Uint64
    @slug : String
    @title : String
    @text : String
    @image : String
    @date : String
    @section : SECTION
    @user : USER
    @image_index : Uint64
end

# ~~

class COMMENT
    @id : Uint64
    @article_id : Uint64
    @user_id : Uint64
    @text : String
    @date_time : String
    @article : ARTICLE
    @user : USER
end

# ~~

class SUBSCRIBER
    @id : Uint64
    @name : String
    @email : String
end
