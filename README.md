# Working with models and named constructors

## Example of Cat transformation

Cat Models:
- [CatRemote](cat/models/cat.remote.ts)
- [Cat](cat/models/cat.ts)

```typescript
    const remoteResponse = { id: 1, name: 'Whiskers', age: 18, breed: 'Siamese' } 

    // Create CatRemote
    const verifiedAndTypesafeRemoteCat = CatRemote.create(remoteResponse);
    console.log(verifiedAndTypesafeRemoteCat);
    // Output:
    // CatRemote { id: 1, name: 'Whiskers', age: 18, breed: 'Siamese' }

    // Create Cat
    const verifiedAndTypesafeCatSentToClient = Cat.create(verifiedAndTypesafeRemoteCat);
    console.log(verifiedAndTypesafeCatSentToClient);
    // Output:
    // Cat { name: 'Whiskers', ageCategory: 'Senior', breed: 'Siamese' }
```
