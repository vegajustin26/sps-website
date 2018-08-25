<?php
// ----- SCRAPE SETTINGS -----
// Length of time to use cached calendar before refresh.
$HOURS_BEFORE_REFRESH = 12;
// ---------------------------
// Scrape function declaration
function scrape_calendar() {
    // Scrape calendar page
    $content = file_get_contents('https://calendar.google.com/calendar/embed?src=nabeelsherazi97%40gmail.com&ctz=America%2FNew_York');
    // Set base URL so relative references to stylesheets, scripts, etc. are preserved
    $content = str_replace('</title>','</title><base href="https://www.google.com/calendar/" />', $content);
    // Inject our custom stylesheet for the calendar, as well as Bootstrap.
    $content = str_replace('</head>','<link rel="stylesheet" href="http://localhost:3000/sps/assets/css/bootstrap.css" />
    <link rel="stylesheet" href="http://localhost:3000/sps/assets/css/calendar.css" />
    <script
    src="https://code.jquery.com/jquery-3.3.1.min.js"
    integrity="sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8="
    crossorigin="anonymous"></script>
    <script
    src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.1/js/bootstrap.bundle.min.js"
    integrity="sha384-u/bQvRA/1bobcXlcEYpsEdFVK/vJs3+T+nXLsBYJthmdBuavHvAW6UsmqO2Gd/F9"
    crossorigin="anonymous"></script>
    <script src="http://localhost:3000/sps/assets/js/calendar.js"></script>
    </head>', $content);
    // Add timestamp to scrape
    $content = str_replace('<head>', sprintf('<head>
    <meta scrape-date="%d" />', time()), $content);
    return $content;
}

// Try to get cached calendar (will be False if cache doesn't exist)
$content = @file_get_contents('cached.html');

if ($content) {
    // Match meta tag storing scrape time
    preg_match('/scrape-date="\d+"/', $content, $matches);
    // Get scrape time, will be stored as 0th element of $last_scraped
    preg_match('/\d+/', $matches[0], $last_scraped);
    // Cast scrape time to int explicitly and store in $last_scraped (no longer array)
    $last_scraped = (int)$last_scraped[0];
    if ((time() - $last_scraped) / 3600 > $HOURS_BEFORE_REFRESH) {
        // Refresh calendar and return
        $content = scrape_calendar();
        echo $content;
    } else {
        // Output cached calendar
        echo $content;
    }

} else {
    // Cache doesn't exist
    $content = scrape_calendar();
    file_put_contents('cached.html', $content);
    echo $content;
}
?>
