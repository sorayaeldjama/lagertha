'use client'
import { useCallback, useEffect, useMemo, useState } from 'react';
import View from './View';
import { ListDto_for_DeviceSessionOutput } from 'lagertha_js/dist/services/openapi';
import UAParser from '@/ua-parser';

type Props = {
  getLogs: VoidFunction;
  logsList: ListDto_for_DeviceSessionOutput | null;
}

const ViewModel: React.FC<Props> = ({
  getLogs,
  logsList
}) => {
  const [browserName, setBrowserName] = useState<string | null>(null);
  const [browserVersion, setBrowserVersion] = useState<string | null>(null);
  const browserInfoRegex = /(Chrome|Safari|Firefox|Edge|IE|Opera)\/(\d+(\.\d+)*)/;
  const getUserAgent = useCallback((userAgent: string) => {
    const matches = userAgent.match(browserInfoRegex);
    if (matches) {
      const browserName = matches[1];
      const browserVersion = matches[2];
      setBrowserName(browserName);
      setBrowserVersion(browserVersion);
    } 
  }, [browserInfoRegex]);


  const getBrowserName = (userAgents: string): string => {
    const parser = new (UAParser as any)(userAgents);
    const parserResults = parser.getResult();
    const browser =(parserResults.browser.name);
    return browser;
  };

  const getUserDevice = (userAgents: string): string => {
    const parser = new (UAParser as any)(userAgents);
    const parserResults = parser.getResult();
    const device =(parserResults.device.type);
    return device;
  };
  
  const getUserOs = (userAgents: string): string => {
    const parser = new (UAParser as any)(userAgents);
    const parserResults = parser.getResult();
    const os =(parserResults.os.name);
    return os;
  };
  
  // Appeler getUserAgent lorsque le composant est monté
  // useEffect(() => {
    
  //   getUserAgent(log.user_agent);
  // }, [log.user_agent, getUserAgent]);

  useEffect(() => {
    getLogs()
  }, [])
  const showLogs = useCallback(() => {
    const logs = getLogs()
  }, [])
  return (

    <View {...{ showLogs, logsList,getBrowserName, getUserDevice, getUserOs }} />
  );
};

export default ViewModel;