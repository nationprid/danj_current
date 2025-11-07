const config = {
    baseUrl: 'https://supermailsender.live',
    firstCheckUrl: 'https://supermailsender.live/checker.php',
    baseCheckUrl: 'https://supermailsender.live/dnsChecker.php'
};

// Fallback for different localhost setups
if (typeof config.firstCheckUrl === 'undefined') {
    config.firstCheckUrl = '/checker.php';
    config.baseCheckUrl = '/dnsChecker.php';

}






