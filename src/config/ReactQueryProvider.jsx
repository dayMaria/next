import {QueryClient, QueryClientProvider} from "react-query";
import {ReactQueryDevtools} from "react-query/devtools"

const client = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      suspense: true
    },
  },
});

const ReactQueryProvider = ({children}) => (
  <QueryClientProvider client={client}>
    {children}
    <ReactQueryDevtools />
  </QueryClientProvider>
)

export default ReactQueryProvider
