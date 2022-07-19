const fcl = require('@onflow/fcl');
const t = require('@onflow/types');

const scriptCode = `
import SoulMadeMain from 0x9a57dfe5c8ce609c
import SoulMadeComponent from 0x9a57dfe5c8ce609c
pub fun main(address: Address) : {String: Bool} {
    
    let preDefinedSets : {String : [String]} = {"Agata": ["Qmc7pguKBnWNTmRiW1LUQX3oKwYULZbmdjE4aLYsw3DeC2", "QmakbzA1sqFiwwQFCASGkQWjf326XDtgqwNAXKMyhZXjof","QmQjBLdXcfhU4WR4yEx8kWuPQcyKWVieioyeBTy53E9MQx","QmR8LKqYv9D21jhGfGXxcdDf3mzrTbTkNY24sEMbTuvkyN","QmZmZjx78yP1eaaqcEwWGgfT11JzdPso8gWvxCWzvGqWKc","QmWD5YUMMZowesxauYBKxSdM8Ak7NmQwp6NLbeNAeWgdWd","QmUnj5t2fp4ffTJDmakUj9tbviWSsTADsbinfE7845W91N","QmcTS3vm7Ln2cyR2hvTabfcrW2P6a3VgnNhN1F773DPte2","QmNk9i9NmCNrdQickKm4tgdk1GtxfdcbkMKxL69iT651YK"],
                                                "Alice": ["QmNbEZMiZfoKbo3tx5a2soZ18aUhvT7ku23yuyvbiNrygd", "QmbCbr3UbyGNWaoqQc94gP61LWqEn6WPqkVLU9PRB78yQm","QmU9h87CH96MYUtyDEn8Fn5FpVKU8BVCZdySDQMtn7gMjZ","QmUh1qFwfgGKUwqsz1G3e9ey5bWmuraaZFaHtQ7qDQmW8y","QmX6dhUFdzJrmY8g7c8Zx2kecA9V4XHq2zpLWpWUGyBxLi","QmZjAk1KHA5sjDXhaYSgZ6uisHNEQ4q8q1dGU6eZSru4M3","QmU5iMvt83hiMbx9dN4iuZkh2TuNCveUpPzaii1PntCuDo","QmNUQG1KDQbmLQpt6JJZ5NMcwdqkV2hDZSkmHVvsZCJpo9"],
                                                "Ariel": ["QmNbEZMiZfoKbo3tx5a2soZ18aUhvT7ku23yuyvbiNrygd","QmXKYZo4i64SJdEzQhMrkjwazzYvCBfhniwGbTJXA9bJZC","QmUwLdG9Sy2JRdsYmU1FTnqj39iG8Ks9CMpbEc5z86DoSf","QmNMV9xXLn7emz6KDdDDojmvqTSgiWX6xbrEuphseF2L3e","QmQfzNYW9AdFdGzbDoQU8e3rnx4YK58cqW4P5bWjM3mSWi","Qmb8Uzw9j8EXFgZTndUzj8hDGbqcd1RA2Qxt45xXEoWU2j","QmSS4iEGqaP9MDApt92ULZFiFymvuhbfVTjjQmK3Cmgjzq","QmaitfU7dcHSv4oZteuC5joXp1vhrDK3B81R3cUF2B3HSq","QmWx1UbsmbNXUYnFmvhHwR7gthq5MV1krfXZXkGaXCLus5"],
                                                "Chiyo": ["Qmc7pguKBnWNTmRiW1LUQX3oKwYULZbmdjE4aLYsw3DeC2","QmWzdzAwLrpCb6c78MjuqL2wFkTNFeJBsVAbCW9c4mdDdU","QmRpBzMy2gb2jGyGivfEEY1egFoUtHVi1UfZsvWqqTgFPS","QmQdf7qi9hHJ4439FJmsLHL3iwT9jgahVUsBGd5MQivQ6P","QmYcjwjjYqnudDgj9aZcxNWktpn2aqen3KetAgiEDBe4R1","QmR4DDVDww6gfG2CnANzoKvmYueGTTWp6FLiZfFUdxsCKh","QmPzXWWQH9qRKWBUWkHG4bEdSthffgCMicRydWY3vz13dq"],
                                                "Circe": ["Qmc7pguKBnWNTmRiW1LUQX3oKwYULZbmdjE4aLYsw3DeC2","QmUSzt4EzCx9XrwX5qNw9PXRhiEcXeCrNUTpZUhpfko9cF","QmQk8JNXckw2uLyqrMTDoZ5D8Xw4M3bZHHjL19mX3fZhWQ","QmUGtMEHVeJEaJ12f11sQogtyQcKptSTjEP1Xuh5326Aua","QmZHd4UuxSGNfWCFBF5r6oNHizmyYqKFejyKZYRwwrRWAm","Qmdgf7yq9MxUGuFaJ5YAjrR74fXgM9pubu42swEjj7oMyV","QmZXEFFgDwYgaCvqh5pkz5XrEMg2vexPAiVj9d6QEFWBDp","QmPnktDNvYXWDVf9gZTXzzB7k6tRQNWMrFh6gSPjc5qHFh","QmWb4KFjEfXc4RsxKDNXMH6XF784ALuqRodatiezPvyjvQ","QmWBnL6nV9MRjJfjnDJywsRBjuT6pU3nVTxopM9P6jgoAk"],
                                                "Crane": ["Qmc7pguKBnWNTmRiW1LUQX3oKwYULZbmdjE4aLYsw3DeC2","Qmdde57h14qcgEsWqBuZBtEgDiheKZMAKW3zfz2WH4HjBK","QmfBRWmjgQCRHfcZXzTFcv85TYzNFA7H9P5asgdRfwNGk7","QmZKbiSLxVCZWNfQdAU1Mi1AMVXCc73NZifyCRpX9yJPSM","QmRPK8uVTEYLxnSiWGFx3KnV8Mor8vLTrEdBkmddqJkTDF","QmYijcS4xk136FqsDZXVBg8UFPynywwDqCMrFhrE9Pj3Zv","QmRZFm3NLoMGnnJseLis9RRbx2wTePWGHYZBYy8yviDwd3","QmfR92jzE2VnSXc1CuuS6YZSm93fvoB4NHVR5HrJDnLj4C","QmbmEpn9u1M8DkCdJWVSasLTWGzWoG3VUa6Z9z8BeJDWBA"],
                                                "Crescent": ["QmZGJRFjnphJqWrHkvLhdk7AVUsvx5jaWWVhFGDMQifiNq","QmSXjPe4ddxYzy7VaVtqziZNEJiwN7J5Kt8wedYQ5Y5EYY","QmdTw2HYVjXonsWQHHtiFMSABkzKkDcsiahhabtmtwSpi3","Qmabg9kZBMvAn353CGBnLvJQeyyYWkh83LUAgp3WCogqow","QmeNM9cYBAWM1j3XyNQWMFZJ3vYQpDJSEmiytbBebBbBQh","QmTJvCw4DmJS49mX2kWGu4VDhYCA1TjkA2imFaWsTUFm2m","QmZYz916mFmvbGWrqN3MwcnfEQvkuQ9GSxFPuiq41K14Qz","QmTZvK12nZ9komPHaHwuVb5cT9PC4vXvG6coytAMYXkZqC","QmZ3NWvT1Q85Qjcn3P9L1skjJy3ZqdarUepxB8pVh9Cpcb"],
                                                "Elaine": ["Qmc7pguKBnWNTmRiW1LUQX3oKwYULZbmdjE4aLYsw3DeC2","QmYefMskzHFnpLjkJX4BxiAMRKRdEuHWmHJvuMJDgUL2ug","QmbCNCiP5gYMHf9HG1JEEuHSMVVic9Jsex8FcQ1oDuoPAd","QmbKUE6htkJ5rCPXp9rzDk7RkidYhuJhvAz6DCjMWMD1dv","Qmd62pqkm4zS4NeLyWb5J52ZGQytrgTxbHLZyt6W7mg5ji","QmcKcTrz83BqbnT1Ta7LDWBW6mgYLFFqx9EP8zBPoMGZf7","QmY2bnxJS5zdZp9qSayLnf8TwTJp7htzPBoYEFCKrRYSRz","QmVXRfHpy2HpvotSaTE2iLDJz6AxBJGUHaB46yLr5M54z3","Qmek11akzhBfmgWz2NEmAYG8uZCDfaRyn6BtJeYszzLg9i"],
                                                "Elle": ["Qmc7pguKBnWNTmRiW1LUQX3oKwYULZbmdjE4aLYsw3DeC2","QmYnTQwrYqRLRN8bNtoUTgUeHPRaEr7yG2rt66YZ1Kvasc","QmV4JBfswCxdZMDQVjoC8UBEGqR2u6vgJphNGRjnw5K6U5","QmfZRJt2cdk1FWbyuQwes5LUoQREZRrhXYqBw5DM7Huuyu","QmSRojbwmQ9tJqExZhRFDaokoihAKCKqJSt7KzgR2X6FoE","QmSoy1bTAkeMbV6Mrt4bxtCkNW2Ldw1bZWRFkwccHpCUAt","QmbseRjME6NQP3g7EPHCWbxArs42E34UFeYvyFsQ6Bh5Bf"],
                                                "Haida": ["Qmc7pguKBnWNTmRiW1LUQX3oKwYULZbmdjE4aLYsw3DeC2","QmdTG5wm9sMHhf1RgEUrY9o2noNuz1cbtEQBKw6EmLyGqh","QmRcJBfMtbnQuTetuoGSTRuzpwUN2d1BRzu2rDm82WLRYs","QmYLhp2ae3PoYdbiBv1mKRyJunSgqwQ4q47eBg7RNkTxYW","QmVg8Q91Vnc3NLbSBQuEQjQJWYZSta7KwFbqyuXTCN2Nhj","QmWjphuCPWSyKvwBsA8ijU4XKCuwBkUL5S8PzGpysqkrXH","QmVHL3syUoNY8HJsJeCKGj7M1EgKe5au6F3ar7xHELbARY","QmNubTsdASipaebwdCEPGQR1jy3v4E2SKw2isd6inLmLfE"],
                                                "Harley": ["Qmc7pguKBnWNTmRiW1LUQX3oKwYULZbmdjE4aLYsw3DeC2","QmTZvKDqdCg2G9fDzstn64PQMnYih1LGVVDs7jz9Y7L7wR","QmNtk7saQqZ6Uvv7ZNHsccYYM2tiaGEihi7VrMV2oNNWU3","QmWpkfKrL9kc6UGPv94co3fCLyadh2skPyyjFaNfTHcb4L","QmVXu49LVfFBxRhdPt8bkYUqpVFJgoFLTNjAbd77nWwHLZ","QmSfNaTDWE2wFUKNzE1XfoSMv4E56Z1VodZkJS5piettwV","QmVLQTWoor3x2HYhmEN3qru3Z8GyBSbwUPZCVgBizJwqq3"],
                                                "Kane": ["Qmc7pguKBnWNTmRiW1LUQX3oKwYULZbmdjE4aLYsw3DeC2","QmY9UBzBbm8HFvaxPBUNDEwRFsNv6zgvgP9RiAU6eckKkZ","QmaaFjf2Li9e9zmXTa1YZ1geLh6msHk2XvALKstQwcESTP","QmQS13jQKuEucKqPEh1FbAQAxmZGsCe8GREy6xi1Gj96MU","QmXEvJwLy33eSCBQcj3J7vYHtSysXxDf5JHXeDS26BvHw3","QmQKJKdn9HzetenGb24SDv5wkrVNEhq1xQDwAfgMtD1YLn","Qme92WNWgaAC7wUNtPhzMqNcFMNR7wHt4f9w7fhtGR8ysP","QmY6C4jK9Q1EHfQWmFZMT9rBH3XwwXsd4migJyryXdGrN6"],
                                                "Lansa": ["QmNbEZMiZfoKbo3tx5a2soZ18aUhvT7ku23yuyvbiNrygd","QmbJZJEqxsAfJDdRDhvmSW8iGffj77UEzQkow3xy3gB4Xk","QmTWuwv8ythgzyBAmdtZT7xSobV4iVoaXowNMJathVaAGT","QmaDpJdAfLBaPZCTR9ajNF9xwtuNuQ4WBWNNZqDti25Qrq","QmSko3wrTLGWHKcQKFXt2SZURZePG8j9XnfLjKRT7Hike3","QmYA7yGZydZrtchnqrKPcgn7TJiknZrFgyYwU9ic2kSTUN","QmfQximqB8pS4aDhpWCEaA6uHmQYqd9XuEy6zhdfM6DNCg","QmakZFbv6a3P3hjDmjhrBDCmke7gyUpnHwvMS7taaueZHN"],
                                                "Laurie": ["QmNbEZMiZfoKbo3tx5a2soZ18aUhvT7ku23yuyvbiNrygd","QmYD2WvHoLdoVRpMXJXcLwXaqqZSym2T2QTDLRjSEgxKcj","QmS4bvqAeWDicyHuydgijTiE5gsmUwbrdTX54RaeHoLGJv","QmcQtF3gArgSH43k6r2TfP6xnM4oxS5ru99Uq8krNsrqCY","QmY5vjXGS9AtkbDkSF5mCEwdPqz1MRktLt2X69btjz2VMX","QmaNQLpAb7F28b3zpEVi3HJUcNHJ9FeBB5mf4tuUJLe9n6","QmdMTsZp3KQf5nMac8EtPqDXJ1pqff3aopQrfvz1HLyD4Q"],
                                                "Lavinia": ["QmZGJRFjnphJqWrHkvLhdk7AVUsvx5jaWWVhFGDMQifiNq","QmZKHWgqX51PwZ2a6Hds4MZrhL7G9xYCCYEYFB243ztCy9","QmXxwAnCG5KD6Wh2e6LBcNeEtVEJ8Qx76PhAz9PLH538wa","QmQU3HFpPWGo9TfppnXyXBybBsxCBsVxp2LzB7gRS9MJfY","QmT4DkJGRTgHpLuxrbbysvnssZbmZmfencqunrpNJ6eZRi","QmU8rZ92kHbmDG1XK56yq5hzVK5uxeC688vGTKTXz45Zyg","QmPUQMfwLH67B27TV7Emh1eq7HUgTx9i6vxiNVvEKaXz85","QmYXWNTyZKNKbhR1ihVLrW227gKLBqA9LyQq794QtpdEgB","QmdG3YMBTtyUKHYKwj8XVw7WSrmFdvFDesa5vYR7nWTarp"],
                                                "Lilith": ["QmZGJRFjnphJqWrHkvLhdk7AVUsvx5jaWWVhFGDMQifiNq","QmSzhBkM63yeWNMrr7xYZfwN2S6yYCRzhg3B2qYT7Gk3Ne","Qmf5pptF3oy34XALF922tQARUFYcVvFPg4b1Sa5rNt5kf8","QmXpL9vXHSMdisD4cPWH3jdPrfcPpyUVPX2hFAWT8V2oiP","QmYzHYePdfUzui7NsuZvQkzKo36y7DkwquPJ9v79W4GUSP","QmRakYq5diAu1m2bPBpHpjtHJ3FqHKbH3Yw6n1RLPF6M6D","QmbCEwngorCs57sJge46HJqRhyNUUyF2E68BTBnSnTDaW9"],
                                                "Luna": ["Qmc7pguKBnWNTmRiW1LUQX3oKwYULZbmdjE4aLYsw3DeC2","QmR1eZ7Xe8aTR1RvDZJCb9v8T1eMEQURkpm8mHtrYpkht4","QmR1jJ1yPt8dW4miGbuWVkSgwZNnX4jtc9DmeoEE54iX5v","QmQnummRPebtsQKJFj21minitsCAJjxfS4ZtTgdYuMWvpP","QmZRwasRwdUC3zpBQKVZ2kYExvEnU6qjao36Qx4mfhhsi7","QmNo6n5vEQc3ikqEtPbJhnJVxcRPvnUwzzgGv6Vxxba3sm","Qmdz3BspdKXcKqjLu9n3wXuKspseNA4juxvR2p27zpNhVJ","QmTRhQAGd4BNn21UuAk5v9GK2ivgLbX2DWXWLqbGRYtKy3","QmTUbVKPmSH64jpq1otaA3UYa2xPM6yLbKtQJEKq36KQPz","QmWk9oxyBPjPLBPJkNVSgYU5efUGS1fR9yNZ7T22nUEUXS"],
                                                "Lunar": ["QmNbEZMiZfoKbo3tx5a2soZ18aUhvT7ku23yuyvbiNrygd","QmXcDuvhJsu9wpEnoFyvbF5M4fyvVqEFGpmoat39TZ1Zn8","QmQFtVJz2wif3dPNzFTLXTTuk7rDF48o29rBzsTtJMAM8U","QmbFBnjXNdGd8p3hDHgk1Hjk3S5xjDHCFPrpxoTKG2MF3P","QmZNJr2iAcCGWHDMU7oAQXooSWj4uWS9zje4qsAHhDJ1eL","QmfRdkqnkZfxte5r73hk7K7fP4FjsRLtjXj7G6e7sTDuKk","QmfTHFjaR79j4EaQxzER4U1LAiYnSuZThL354jKhgeu1YK","QmPQqBn9mBMN37PkiJKpQTqMWjz5i5txGc57A26dwYDohY","QmZ2rvVnMMrTDAsM3ZiBgZAxV6PWtkGmbVirQQndrR3Qq9"],
                                                "Malverna": ["QmNbEZMiZfoKbo3tx5a2soZ18aUhvT7ku23yuyvbiNrygd","QmcTDXwdxVZbM4qUvKVuiDNyBnaGYzNh5MAY2nvGw8XEna","QmSmVRAqpsz4Y2pPEugfuuPCmDCbYqtfSU3ibm3BFHwVvd","QmaAKDbW3vtv5Urnco1vbp8yDfUmXE1ZX4tiMpthBMV1Jy","QmSC1jA1DKEZbxCEngwuSb176CQex5aUnkmVRvsNqcCjR5","QmaYs6yEAZgaU752rZg4ao1TkKGwTsrvRdRJ1qLMKog9cV","QmdL7ssnK8v3pYcT759JsbcDnnPpFXoCRb725qDk6uuYUc","QmYumvRbpdeADjQrVS8LnYsB7hCNLmGRWij1D3kCUP5KAb"],
                                                "Minoko": ["Qmc7pguKBnWNTmRiW1LUQX3oKwYULZbmdjE4aLYsw3DeC2","QmRBEgqzKY4axkqACPXUppi1jQKs8HBgSsTnV1Zu2aEhok","QmVbHeKn7RejmrUKcdfqmkaVC5BxTiVAPWUnBm99BLQ83g","QmZBCEtEQM7DjMPXJJDNodn6zxR6eawQNSFXE3f82gCy1q","QmY1xDaXEvGjkSSnGpeYkYbs5VE8g1gFxQ1DagAmtycm5K","QmdpdatvL9J5woxmZCavW3WPUbbGTdp5wicLswU1qMvaKF","Qmd6MDT9vpdD8mP8xtmTnjqt7NzWcmkeKDBhuQunFJqoN6"],
                                                "Nanari": ["Qmc7pguKBnWNTmRiW1LUQX3oKwYULZbmdjE4aLYsw3DeC2","QmZq6R2sjiRKz5K4NRCS7iCxMP3g5a33uj8PPCAyUQaino","QmaoNV77mMhUkGLFkHvMf3BMaxYeKZuhexrevRdrjzMAco","QmdDTu9EKSPqQgw9bPhxGowPzokz41YdJx7M5ZDbZLpV6V","Qmat3wYD2PAGPXfaPc1Dfvj629i3QiqnpCYsKPq3PXsaNf","QmVudXu4LP7e3LsHGjzE131WJvyLySKZYaw6rMoyV4Am4m","QmUVHBPddJnn4fXFUTScfKGKHgtPfe6yNZtMgzjUDxaCoJ"],
                                                "Natasha": ["QmNbEZMiZfoKbo3tx5a2soZ18aUhvT7ku23yuyvbiNrygd","QmUaTE8FELfqcjAZMMkyJZH2JzQvUgPfWtEydsoBZ8E1cd","QmRh4sU83B6HsXTSWx2xiPpxqQAU9WBw5DcVeDUKBPZo2d","QmfADrGkRqgjpNEswnLaKnWH5WzsEFcJSXeJuua6JGHEdV","QmSjDVDkT4GP9VtkodR7myELbFE5h6fNpRfLhm5YKEwpLZ","QmcZ6nKUvKa2yZLAPhUUoCZuMzkUBM3vmYDirjdrTSUd3M","QmTvjQjyiZFC2DPgfAt5TQLbojS1ZQesJT7gedQv9ZVzHo","QmceDZsfYzo9pyvV9BxHPnvj4SfGHaXfRbHhV2ncfea8YV","QmaUPdNkpAhgB2dfjksW5L6eMYMspcBHTcRMvgXEdTNKsc"],
                                                "Neva": ["QmNbEZMiZfoKbo3tx5a2soZ18aUhvT7ku23yuyvbiNrygd","QmRiAx2s64hcp6CTh2Ss1XZ54PsUegcGFPubhBSrNqyoao","QmXaaqmLhr41gdD2QCA7vQhqZNJXAnJgF4rhRz7zKDLfDH","QmXJ8DCa45JRG93Yf2UxEUmmPRvMdV4gmCfYPEkgpxYtD9","Qmbg5zS4EJNWqvkxa2HqnSmnt8Up61oQX4Pu5w4neC5XP3","QmVY3T1GsjA5tyd1RF1skovMDKz4y4SjVjvgH7Hx1rhUnw","QmSaUMwcGbdj1yrFLWvbPFYMRd2foNQykS7FwhZNsNVAe7","Qma1jggmKspqmAAMovNHDxmLq9XAhzmYzmtJZcEuzxeqmt","QmcBktCrmtGobbcSKiLHik7y2HrWfAQ5DJTcHDA4seWs5G"],
                                                "Noah": ["QmNbEZMiZfoKbo3tx5a2soZ18aUhvT7ku23yuyvbiNrygd","QmTR2WfGgEAcuSJvaxHETdPxPHqyVRp2wYxNBoA7Mabqxf","QmYNFToNghP2jRhreCnFidMg79GPXaRe2YXNjvQ4urRTUp","QmYCD2k4PJ6hWiYwyED6NyAFckMrnLgAdU8PEBUs7LaR4s","QmfNG5RaHhAaxh2xYDeKx1UxqMttwqkD5i69LMUQsv3Z7d","QmVrnZXvxg6aMuQfqrFGyN5cKrz1gPpzY8LZGURcp8uSSb","QmQhqoebf99htwQdKaPNKY4jEKX8KY398gwLDkeEgh6DcQ","QmSez1qn8tpPAWQ728thgCyR8dRTSaEH3zcRHqTdnF1VDX"],
                                                "Raffia": ["Qmc7pguKBnWNTmRiW1LUQX3oKwYULZbmdjE4aLYsw3DeC2","QmTZk3ujNKH8zGa3jET7E8ucV55mG9fdVTKTJfV3pj5ewp","Qmaq8r5ZPsg98qaTwadiF2ZhkWggBto8g2Esuh1vXYtrgS","QmXSxnAp2VbvgqhsXwmYYd5A4cpD9yJKndhUmVa8zGWWZp","Qmd9AtCMzFRVfNyQFXrrpopVz6cjHQRecgHd1CwAbrERSY","Qmavds3jUmr5ZuG83N9iLWz3Ag8sXv3pRLmuGYj12HdKpY","QmVVqm8yjYakdssCEmwYGQEKE52stLRXZWTd1ufCYFhPFP","QmP5tGdtvCW5evJMYJAEM2Q2hXg4XM6kZi7MTKf7XV2vuv","QmTW6Scz5Z7T8A74C92ZfQ9P3woUQ6McUkJxLXeVFvse1C"],
                                                "Rhein": ["QmZGJRFjnphJqWrHkvLhdk7AVUsvx5jaWWVhFGDMQifiNq","QmbrBNTqKrV5wpraqbQ5ei4b7Cwoif5kND7cPaXqp5Dswi","QmXKvgPgfTY74vuALhvdvvSCJR6HuETQTJsNHdwoHRn4Np","QmWJxbLuEJQMboY4g6V6u8cXCA6ZpTuRo6aU9odMABjfuf","QmcoApmbpzjTEdRSZjAizKbng3cWQM9uJT2XAXn2fA4a98","QmWd72Yg9G4zLQitYa9RhbpWXWurpQDNJ2hkFkrsRogvFc","QmckLPf7baCy99pW3NnRv3zLFCvbdyXfhpG9xBX5M9KVzo","QmTJAKm4CrVjd6PJo7nbNXWriZzs1vPcB3jyPj9vxvhcx6"],
                                                "Surin": ["QmNbEZMiZfoKbo3tx5a2soZ18aUhvT7ku23yuyvbiNrygd","QmcqvanmgTYTVRfA5q8dWvKGpMtwXD1EFLtvyN3RKaFvCM","QmWeLHYhyfNYuDVSAXQBs8d3prvVrsu1KfqprRX3mhAa8P","QmamxqoRhyo3moYFBH8yXe3ziAQJrbBcUQwR9tthCLFhCf","QmYkJauXFNhciuBMhAAWcKoC6MCi1Va7QJ8CzqjzZgnVTo","QmY7ftRYLgLYTQf6hYtxFgwW9VDSsRZ3s2s1F8fqj9uoQB","QmQ1eAXwpv24zibZi1zLuT6NRb5Yms15rAiuvNtGCHrcgW","QmYdn67zA1DuctG2KfxXVxoVLpsk2wNbp5Z7S1z2pCb1Fx","QmfYj5e6EEwSAnNncUCxupXXFUfkCHu2HUd7dXskQA3AUS"],
                                                "Sylver": ["Qmc7pguKBnWNTmRiW1LUQX3oKwYULZbmdjE4aLYsw3DeC2","QmU2TJUfPUUDCeZFwbV617aQamWEqqiM9U55a3xMCZWqcK","QmQ4qsh1JF4bMV6bzue9Rj8491CG7nvcgq9h1gzqbsz6Qe","QmcmBkceSBMQyC5Sh4Vdviu72SX7T5H3h1BNZGTpRQ7kKD","QmP1AE67qDUsr4EN78MCasFwnu3VayPfGh1ha8zP2gWMty","QmVATRRU1VnRKbtP74oexdCYjkiwwbxUHv9xPMYPNMMpzz","QmarRmZsHc3zBwnG8MRicoXAmGiQsSxG3mCGFywgnbSxGP","QmZDJFqiWwiaJpA7ksYpjLuNc7PVYKoQqoUZzzZvbxoN3R","QmYnnPe8LhER5Da7QGztWnGdxXHCcJ1995HPBJo2wqWTdd","QmZ7rQ1CPKPwJcQ6iVCX9Q9z75RS3bMc6fNsPrSKMqkv64"],
                                                "Theia": ["QmNbEZMiZfoKbo3tx5a2soZ18aUhvT7ku23yuyvbiNrygd","QmSCwUP1L2o39B6o3kuK2AWM8umpFWgovyqLu85gPrFC9J","QmQuXQtbxPFs1pBXqno9U45hhc6mFH3biYNjXHVHafg83J","QmcJbXtYuR6k8t67rnEADg7hVj2bWZB8hkjwWkeLCXm5KV","QmbmTGJ8YBJsDVo7xHRx5pykZQCG17dEC2NxJSdicHYJLM","QmWwNZbMDFqWCGFXgdm5criCs3sZarmJweAtzjvVX4mP35","QmUp5AKpfBZBW4dah7dr66DioAMQCVpG8NwfqsgfiG9GoP","QmVsGUbrY7pGnuAWEjTkqras1u51uJfz2NuQbcZ4CGHV1w","QmcAhMyweHR6ngpqnzLdrFDcF94SrpWRJBX2rQw38tZs7V"],
                                                "Yvette": ["Qmc7pguKBnWNTmRiW1LUQX3oKwYULZbmdjE4aLYsw3DeC2","QmWU1nhUsRbmT64T3dVVgdxqyZxfUF6toa7andWEevtKyE","QmYp6Z4fkEmRxV2PGCWrrNxXFPBoGnfzfP4zsjzyhXvvP6","QmVqWf2EBEHy8U2CsvzhWe9NSnrZpXMA2odyqxa593jAHh","QmcV2mKUweHZVQWgDRgpdBHBtgytL3tKuYK4GsdKz2KvEh","QmexHmTxNp6YJiqxTEY5RBWp8objWSHhFGiR4higvABFwm","QmeDBLML4BWoHjRGtuXLeD8ZMt4R9b9zKCu7QPXYF1VZR1","QmXY8EVUWxnypASzPFbXKWv8f44xpQVJkanLZksjcdw1vf","QmTgu2Li3A6XBHmqh3ctH6uGzKsXZkgYBZrZqPGXGXW33h","QmdpeFL9YGs2BDJcJ9cKZKXMVDXZRsdBsKS754DRjyKDLs"]
                                                }

    // let preDefinedSets : {String : [String]} = {"Agata": ["Qmc7pguKBnWNTmRiW1LUQX3oKwYULZbmdjE4aLYsw3DeC2", "QmakbzA1sqFiwwQFCASGkQWjf326XDtgqwNAXKMyhZXjof","QmQjBLdXcfhU4WR4yEx8kWuPQcyKWVieioyeBTy53E9MQx","QmR8LKqYv9D21jhGfGXxcdDf3mzrTbTkNY24sEMbTuvkyN","QmZmZjx78yP1eaaqcEwWGgfT11JzdPso8gWvxCWzvGqWKc","QmWD5YUMMZowesxauYBKxSdM8Ak7NmQwp6NLbeNAeWgdWd","QmUnj5t2fp4ffTJDmakUj9tbviWSsTADsbinfE7845W91N","QmcTS3vm7Ln2cyR2hvTabfcrW2P6a3VgnNhN1F773DPte2","QmNk9i9NmCNrdQickKm4tgdk1GtxfdcbkMKxL69iT651YK"]}

    // list of ids that other users have used to claim for rewards
    let alreadyClaimedComponentIdList : [UInt64] = []

    let mainRef = getAccount(address).getCapability<&{SoulMadeMain.CollectionPublic}>(SoulMadeMain.CollectionPublicPath).borrow() ?? panic("Could not borrow the receiver reference")
    
    // var allComponents : [SoulMadeComponent.ComponentDetail] = mainRef.borrowMain(id: mainRef.getIDs()[0]).getAllComponentDetail().values
    var verifyResult : {String: Bool} = {}

    // todo: 以set作为最外层的loop，我是想，一旦内部loop main的时候，发现有一个符合条件的main，就直接break，然后判断下一个main
    for setName in preDefinedSets.keys {
      // by default, it starts with false
      var desiredComponentIpfsHashList : [String] = preDefinedSets[setName]!
      var res : Bool = false
      verifyResult[setName] = res

      for mainId in mainRef.getIDs(){

        //var categoryComponentsDic: {String : SoulMadeComponent.ComponentDetail} = mainRef.borrowMain(id: mainId).getAllComponentDetail()
        //var allComponents : [SoulMadeComponent.ComponentDetail] = categoryComponentsDic.values
        var allComponents : [SoulMadeComponent.ComponentDetail] = mainRef.borrowMain(id: mainId).getAllComponentDetail().values

        // the users cannot have more than what we ask for
        if allComponents.length != desiredComponentIpfsHashList.length {
          continue
        }

        for component in allComponents{
          var ipfsHash = component.ipfsHash
          // var componentNftId = component.id

          // as this single component does not meet the requirement, there is no need to check other components within this Main, so break
          if !desiredComponentIpfsHashList.contains(ipfsHash) {
            res = false
            break
          }

          res = true
        }

        if res==true {
          break
        }

        // if it does not break from the previous Loop, meaning that this Main meets the requirment, so res should be true, and there is no need to loop other Main for this Set.
        // so break, and check next set
      }

      if res == true {
          verifyResult[setName] = res
      }
    }

    return verifyResult
}
`;

const checkSoulMadeComplete = async (account)  => {
    try {
        const result = await fcl.send([
            fcl.script(scriptCode),
            fcl.args([
                fcl.arg(account, t.Address),
            ])
        ]).then(fcl.decode);
        return result;
    } catch(e) {
        return {error: true, message: e.message};
    }
}



module.exports = {
    checkSoulMadeComplete
}