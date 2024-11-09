import * as c3 from 'c3';
import { useEffect, useRef } from 'react';

export default function C3Chart({ data, title }) {
  const chartRef = useRef(null);
  useEffect(() => {
    const chart = c3.generate({
      bindto: chartRef.current,
      data: {
        columns: data,
        type: 'donut',
      },
      size: {
        width: chartRef.current.offsetWidth,
        height: 160,
      },
      color: {
        pattern: ['#26C0C7', '#5151D3', '#E68618'],
      },
      donut: {
        title: title,
        width: 10,
        label: {
          show: false,
        }
      }
    });
    return () => {
      chart.destroy();
    };
  }, [data, title]);
  return (
    <div ref={chartRef}></div>
  )
}
