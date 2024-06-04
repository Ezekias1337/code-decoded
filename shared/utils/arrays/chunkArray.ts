export const determineNumberOfArrayChunks = <T>(arrayToChunk: T[], chunkSize: number): number => {
    if (arrayToChunk?.length > 0) {
      return Math.ceil(arrayToChunk.length / chunkSize);
    } else {
      return 0;
    }
  };
  
  export const chunkArray = <T>(arrayToChunk: T[], chunkSize: number): T[][] => {
    const numberOfArrayChunks = determineNumberOfArrayChunks(arrayToChunk, chunkSize);
    const masterArray: T[][] = [];
  
    for (let i = 0; i < numberOfArrayChunks; i++) {
      const sliceFirstParameter = i * chunkSize;
      const sliceSecondParameter = sliceFirstParameter + chunkSize;
      const arrayChunk = arrayToChunk.slice(sliceFirstParameter, sliceSecondParameter);
  
      masterArray.push(arrayChunk);
    }
  
    return masterArray;
  };
  