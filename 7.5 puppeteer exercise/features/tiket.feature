Feature: To buy a ticket
    Scenario: Boocking
        Given user is on "http://qamid.tmweb.ru/client/index.php" page
        When user chooses by day '2'
        When user chooses movie "14:00"
        When user chooses row "3" seat "5"
        When user click "button"
        Then user sees text "Вы выбрали билеты:"
        When user click ".acceptin-button"
        Then user sees text "Электронный билет"


    Scenario: Should book two seats
        Given user is on "http://qamid.tmweb.ru/client/index.php" page
        When user chooses by day '2'
        When user chooses movie "14:00"
        When user chooses row '5' seat '3'
        When user chooses row '5' seat '4'
        When user click "button"
        Then user sees text "Вы выбрали билеты:"
        When user click ".acceptin-button"
        Then user sees text "Электронный билет"


    Scenario: Should not book
        Given user is on "http://qamid.tmweb.ru/client/index.php" page
        When user chooses by day '2'
        When user chooses movie "14:00"
        When user chooses row '4' seat '4'
        When user click "button"
        Then user sees the header "Фильм 3"
        Then user sees ".acceptin-button" is gray



