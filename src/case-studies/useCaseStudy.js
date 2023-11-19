import { useQuery } from "react-query"
import { caseStudyApi } from "../common/http/apis"

export default function useCaseStudy(id) {
    const { data, isLoading } = useQuery({
        queryKey: ['caseStudys', id],
        queryFn: async () => {
            const caseStudy = await caseStudyApi.get({ url: `case-study/${id}` })
            const contextsIds = []
            const auIds = []
            caseStudy.years.forEach(y => {
                y.contexts.forEach(c => {
                    contextsIds.push({ id: c.id, year: y.year })
                    c.aus.forEach(au => {
                        auIds.push({ id: au, year: y.year, context: c.id })
                    })
                })
            })
            const contexts = await caseStudyApi.get({ url: `context/ids/${contextsIds.map(x => x.id).join(',')}` })
            const aus = await caseStudyApi.get({ url: `analysis-unit/ids/${auIds.map(x => x.id).join(',')}` })
            const members = await caseStudyApi.get({ url: `user/ids/${caseStudy.members.join(',')}` })
            const final = {
                ...caseStudy,
                years: caseStudy.years.map(y => ({
                    year: y.year,
                    contexts: contextsIds.filter(x => x.year === y.year).map(x => ({
                        ...x,
                        ...contexts.find(x2 => x.id === x2.id),
                        aus: auIds.filter(au => au.year === y.year && au.context === x.id).map(au => ({
                            ...au,
                            ...aus.find(au2 => au.id === au2.id)
                        }))
                    }))
                })),
                members
            }
            return final
        },
        enabled: id !== undefined
    })

    return [data, isLoading]
}