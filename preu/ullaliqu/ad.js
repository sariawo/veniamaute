function formatBalance(balance, decimals) {
    // Convert balance to a number in case it's a string
    const numericBalance = Number(balance);
    // Use toFixed to format the number to the specified decimal places
    const formattedBalance = numericBalance.toFixed(decimals);
    return formattedBalance;
}
