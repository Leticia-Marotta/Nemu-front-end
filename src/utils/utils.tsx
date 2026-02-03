/** Convert the table header to full header name
 * @param header
 * @returns header translated
 */

export const convertHeaderTableName = (header: string) => {
  const headers: { [key: string]: string } = {
    id: "Session ID",
    utmSources: "Jornadas",
    firstTP: "Início da Jornada",
    lastTP: "Fim da Jornada",
    startedAt: "Tempo de início",
    endedAt: "Tempo de finalização",
  };
  return headers[header];
};
