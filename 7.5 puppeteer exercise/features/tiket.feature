Feature: To buy a ticket
    Scenario: Boocking
        Given user is on "http://qamid.tmweb.ru/client/index.php" page
        When user chooses by "a:nth-child(2)"
        When user chooses movie 'a[data-seance-id="94"'
        When user chooses seat "div:nth-child(3) > span:nth-child(5)"
        When user click "button"
        Then user sees text "Вы выбрали билеты:"
        When user click ".acceptin-button"
        Then user sees text "Электронный билет"
       

    Scenario: Should book two seats
        Given user is on "http://qamid.tmweb.ru/client/index.php" page
        When user chooses by "a:nth-child(2)"
        When user chooses movie 'a[data-seance-id="94"'
        When user chooses seat "div:nth-child(5) > span:nth-child(3)"
        When user chooses seat "div:nth-child(5) > span:nth-child(4)"
        When user click "button"
        Then user sees text "Вы выбрали билеты:"
        When user click ".acceptin-button"
        Then user sees text "Электронный билет"
        

    Scenario: Should not book
        Given user is on "http://qamid.tmweb.ru/client/index.php" page
        When user chooses by "a:nth-child(2)"
        When user chooses movie 'a[data-seance-id="94"'
        When user chooses seat "div:nth-child(4) > span:nth-child(4)"
        When user click "button"
        Then user sees the header "Фильм 3"
        Then user sees ".acceptin-button" is gray



