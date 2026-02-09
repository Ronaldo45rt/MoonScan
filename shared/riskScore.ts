export function mockScan(address: string) {
  let hash = 0;
  for (let i = 0; i < address.length; i++) {
    hash = (hash << 5) - hash + address.charCodeAt(i);
    hash |= 0;
  }

  const abs = Math.abs(hash);
  const walletAgeDays = (abs % 1800) + 10;
  const tokensDeployed = abs % 40;
  const rugs = abs % 5;
  const score = Math.min(
    100,
    Math.floor(
      tokensDeployed * 1.5 +
      rugs * 15 +
      (walletAgeDays < 90 ? 25 : 0)
    )
  );

  return {
    address,
    walletAgeDays,
    tokensDeployed,
    rugs,
    riskScore: score,
    riskLabel: score > 70 ? "HIGH" : score > 40 ? "MEDIUM" : "LOW"
  };
}
